import React from 'react';
import { Wand2 } from 'lucide-react';
import Button from '../ui/Button';

export default function GenerateButton({ onClick, disabled, loading }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      icon={!loading ? Wand2 : undefined}
      size="lg"
      className="w-full text-base"
    >
      {loading ? 'Generating cards…' : 'Generate Flashcards'}
    </Button>
  );
}