import React from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle, Grid3x3, Layers } from 'lucide-react';
import Button from '../ui/Button';

export default function FlashcardControls({
  onPrev,
  onNext,
  onShuffle,
  onReset,
  onToggleView,
  isGridView,
  canPrev,
  canNext,
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" onClick={onPrev} disabled={!canPrev}>
          <ChevronLeft size={16} />
        </Button>
        <Button variant="secondary" size="sm" onClick={onNext} disabled={!canNext}>
          <ChevronRight size={16} />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onShuffle} icon={Shuffle}>
          Shuffle
        </Button>
        <Button variant="ghost" size="sm" onClick={onReset} icon={RotateCcw}>
          Reset
        </Button>
        <Button variant="ghost" size="sm" onClick={onToggleView}>
          {isGridView ? <Layers size={16} /> : <Grid3x3 size={16} />}
        </Button>
      </div>
    </div>
  );
}