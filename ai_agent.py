# ai_agent.py
from langchain_openai import ChatOpenAI
from langchain_groq import ChatGroq
from langchain_tavily import TavilySearch
from langchain.tools import Tool
from langchain.agents import initialize_agent, AgentType


openai_llm=ChatOpenAI(model="gpt-4o-mini")
groq_llm=ChatGroq(model="llama-3.3-70b-versatile")

# LLM (Groq)


# Tavily (official package)
tavily = TavilySearch(max_results=2)

# Wrap into a single-string tool for legacy agents
def tavily_search(q: str) -> str:
    """Web search via Tavily. Input: a plain text query."""
    res = tavily.invoke({"query": q})
    if not res or "results" not in res:
        return "No results."
    lines = []
    for r in res["results"]:
        title = r.get("title", "")
        snippet = r.get("content", "")[:500]
        url = r.get("url", "")
        lines.append(f"{title}\n{snippet}\n{url}")
    return "\n\n".join(lines)

tools = [
    Tool.from_function(
        name="tavily_search",
        func=tavily_search,
        description="Search the web. Input should be a search query string.",
    )
]

# Legacy ReAct agent that requires single-input tools
# Legacy ReAct agent that requires single-input tools
def get_response_from_ai_agent(llm_id, query, allow_search, system_prompt, provider):
    # Pick LLM
    if provider == "Groq":
        llm = ChatGroq(model=llm_id) if llm_id else groq_llm
    elif provider == "OpenAI":
        llm = ChatOpenAI(model=llm_id) if llm_id else openai_llm
    else:
        raise ValueError(f"Unknown provider: {provider}")

    # Tools on/off based on allow_search
    selected_tools = tools if allow_search else []

    # Initialize agent (legacy ZERO_SHOT_REACT_DESCRIPTION)
    agent = initialize_agent(
        tools=selected_tools,
        llm=llm,
        agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
        verbose=True,
    )

    # Fold system_prompt into the input to ensure it's respected by this legacy agent
    effective_input = (
        f"{system_prompt.strip()}\n\nUser query: {query.strip()}"
        if system_prompt else query
    )

    # Run it
    res = agent.invoke({"input": effective_input})

    # Print and return the output text for convenience
    text = res.get("output", "")
    print("\n=== OUTPUT ===")
    print(text)
    return text

