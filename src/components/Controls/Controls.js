import React from 'react';
import { ArrowLeft, ArrowRight, ArrowDown, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './Controls.css';

const Controls = ({ onMoveLeft, onMoveRight, onRotate, onDrop }) => {
  return (
    <div className="controls">
      <Button onClick={onMoveLeft} variant="outline" size="icon">
        <ArrowLeft className="h-4 w-4" />
      </Button>
      <Button onClick={onMoveRight} variant="outline" size="icon">
        <ArrowRight className="h-4 w-4" />
      </Button>
      <Button onClick={onRotate} variant="outline" size="icon">
        <RotateCw className="h-4 w-4" />
      </Button>
      <Button onClick={onDrop} variant="outline" size="icon">
        <ArrowDown className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Controls;