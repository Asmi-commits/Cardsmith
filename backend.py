from dotenv import load_dotenv
load_dotenv()

from typing import List
from pydantic import BaseModel
class RequestState(BaseModel):
  model_name:str
  model_provider:str
  system_prompt:str
  messages:List[str]
  allow_search:bool


ALLOWED_MODEL_NAMES = ["llama3-70b-8192", "mixtral-8x7b-32768", "llama-3.3-70b-versatile", "gpt-4o-mini"]


from fastapi import FastAPI
from ai_agent import get_response_from_ai_agent
app=FastAPI(title="LanGraph AI Agent")
# backend.py
@app.post("/Chat")
def chat_endpoint(request: RequestState):
    if request.model_name not in ALLOWED_MODEL_NAMES:
        return {"error": "Invalid model name"}
    
    try:
        # Fix: Join messages into single query
        query = " ".join(request.messages) if request.messages else ""
        
        if not query.strip():
            return {"error": "Empty query"}
        
        response = get_response_from_ai_agent(
            llm_id=request.model_name,
            query=query,
            allow_search=request.allow_search,
            system_prompt=request.system_prompt,
            provider=request.model_provider
        )
        
        return {"response": response}
    
    except Exception as e:
        return {"error": f"Agent failed: {str(e)}"}
import uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=9999)
 

