

import {
  DndContext,
  useDraggable,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState, useEffect } from "react";
import styled from "styled-components";

const DraggableIcon = styled.div<{ size: number }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  touch-action: none; 

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const icons = [
  { id: "react", src: "/svg/react.svg", alt: "React Logo" },
  { id: "firebase", src: "/svg/firebase.svg", alt: "Firebase Logo" },
  { id: "node", src: "/svg/node.svg", alt: "Node.js Logo" },
  { id: "typescript", src: "/svg/ts.svg", alt: "TypeScript Logo" },
  { id: "javascript", src: "/svg/js.svg", alt: "JavaScript Logo" },
  { id: "sql", src: "/svg/sql.svg", alt: "SQL Logo" },
  { id: "css", src: "/svg/css.svg", alt: "CSS Logo" },
  { id: "html", src: "/svg/html.svg", alt: "HTML Logo" },
  { id: "sass", src: "/svg/sass1.svg", alt: "SASS Logo" },
];

interface DraggableProps {
  id: string;
  x: number;
  y: number;
  size: number;
  src: string;
  alt: string;
}

const Draggable = ({ id, x, y, size, src, alt }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  return (
    <DraggableIcon
      ref={setNodeRef}
      size={size}
      style={{
        transform: `translate(${x + (transform?.x || 0)}px, ${y + (transform?.y || 0)}px)`,
      }}
      {...listeners}
      {...attributes}
    >
      <img src={src} alt={alt} />
    </DraggableIcon>
  );
};

export const DragAndDropIcons = () => {
  const [positions, setPositions] = useState<
    Record<string, { x: number; y: number }>
  >({});
  const [boxSize, setBoxSize] = useState({ width: 500, height: 300 });
  const [iconSize, setIconSize] = useState(90);


  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  useEffect(() => {
    const updateSize = () => {
      const width = Math.min(500, window.innerWidth * 0.8);
      const height = 300;
      const size = width / 8;

      setBoxSize({ width, height });
      setIconSize(size);

      const rows = Math.ceil(icons.length / 3);
      const startX = (width - 3 * size) / 2;
      const startY = (height - rows * size) / 2;

      const newPositions: Record<string, { x: number; y: number }> = {};
      icons.forEach((icon, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        newPositions[icon.id] = {
          x: startX + col * size,
          y: startY + row * size,
        };
      });

      setPositions(newPositions);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleDragEnd = (event: any) => {
    const { id } = event.active;
    const { x, y } = event.delta;

    setPositions((prev) => ({
      ...prev,
      [id]: {
        x: Math.max(0, Math.min(prev[id].x + x, boxSize.width - iconSize)),
        y: Math.max(0, Math.min(prev[id].y + y, boxSize.height - iconSize)),
      },
    }));
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      {icons.map((icon) => (
        <Draggable
          key={icon.id}
          id={icon.id}
          x={positions[icon.id]?.x || 0}
          y={positions[icon.id]?.y || 0}
          size={iconSize}
          src={icon.src}
          alt={icon.alt}
        />
      ))}
    </DndContext>
  );
};
