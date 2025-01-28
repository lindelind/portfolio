
import { DndContext, useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import { styled } from "styled-components";

const DraggableIcon = styled.div<{ x: number; y: number }>`
  position: absolute;
  width: 60px;
  height: 60px;
  cursor: grab;
  transform: translate(${(props) => props.x}px, ${(props) => props.y}px);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

const icons = [
  { id: "react", src: "src/images/react.svg", alt: "React Logo" },
  { id: "react2", src: "src/images/react.svg", alt: "React Logo" },
  { id: "react3", src: "src/images/react.svg", alt: "React Logo" },
  { id: "react4", src: "src/images/react.svg", alt: "React Logo" },
  { id: "react5", src: "src/images/react.svg", alt: "React Logo" },
];

interface DraggableProps {
  id: string;
  x: number;
  y: number;
  src: string;
  alt: string;
}

const Draggable = ({ id, x, y, src, alt }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: `translate(${x + (transform?.x || 0)}px, ${y + (transform?.y || 0)}px)`,
  };

  return (
    <DraggableIcon
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <img src={src} alt={alt} />
    </DraggableIcon>
  );
};

export const DragAndDropIcons = () => {
  const [positions, setPositions] = useState(
    icons.reduce(
      (acc, icon) => {
        acc[icon.id] = { x: Math.random() * 200, y: Math.random() * 200 };
        return acc;
      },
      {} as Record<string, { x: number; y: number }>
    )
  );

  const handleDragEnd = (event: any) => {
    const { id } = event.active;
    const { x, y } = event.delta;

    setPositions((prev: any) => {
      const parent = event.over?.rect; 

      const parentRect = parent || { width: 600, height: 400 }; 

      const iconWidth = 70; 
      const iconHeight = 70; 

      const newX = Math.max(
        0,
        Math.min(prev[id].x + x, parentRect.width - iconWidth)
      );
      const newY = Math.max(
        0,
        Math.min(prev[id].y + y, parentRect.height - iconHeight)
      );

      return {
        ...prev,
        [id]: { x: newX, y: newY },
      };
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {icons.map((icon) => (
        
          <Draggable
            key={icon.id}
            id={icon.id}
            x={positions[icon.id].x}
            y={positions[icon.id].y}
            src={icon.src}
            alt={icon.alt}
          />
       
      ))}
    </DndContext>
  );
};
