import { DndContext, useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import { styled } from "styled-components";


const DraggableIcon = styled.div`

  position: absolute;
  width: 90px;
  height: 90px;
  cursor: grab;
  display: flex;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const icons = [
  { id: "react", src: "/images/react.svg", alt: "React Logo" },
  { id: "firebase", src: "/images/firebase.svg", alt: "Firebase Logo" },
  { id: "node", src: "/images/node.svg", alt: "Node.js Logo" },
  { id: "typescript", src: "/images/ts.svg", alt: "TypeScript Logo" },
  { id: "javascript", src: "/images/js.svg", alt: "JavaScript Logo" },
  { id: "sql", src: "/images/sql.svg", alt: "SQL Logo" },
  { id: "css", src: "/images/css.svg", alt: "CSS Logo" },
  { id: "html", src: "/images/html.svg", alt: "HTML Logo" },
  { id: "sass", src: "/images/sass1.svg", alt: "SASS Logo" },
];



// const defaultPositions: Record<string, { x: number; y: number }> = {
//   react: { x: 200, y: 150 },
//   firebase: { x: 300, y: 150 },
//   node: { x: 400, y: 150 },
//   typescript: { x: 500, y: 150 },
//   javascript: { x: 600, y: 150 },
//   sql: { x: 700, y: 150 },
//   css: { x: 800, y: 150 },
//   html: { x: 900, y: 150 },
//   sass: { x: 1000, y: 150 },
// };

const mobilePositions: Record<string, { x: number; y: number }> = {
  react: { x: 250, y: 150 },
  firebase: { x: 350, y: 150 },
  node: { x: 450, y: 150 },
  typescript: { x: 550, y: 150 },
  javascript: { x: 200, y: 250 },
  sql: { x: 300, y: 250 },
  css: { x: 400, y: 250 },
  html: { x: 500, y: 250 },
  sass: { x: 600, y: 250 },
};

interface DraggableProps {
  id: string;
  x: number;
  y: number;
  src: string;
  alt: string;
}

const Draggable = ({ id, x, y, src, alt }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  return (
    
      <DraggableIcon
        ref={setNodeRef}
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
  const [positions, setPositions] = useState(mobilePositions);

  const handleDragEnd = (event: any) => {
    const { id } = event.active;
    const { x, y } = event.delta;

    setPositions((prev) => {
      const parentRect = { maxWidth: 500, height: 500 }
      const iconSize = 70;

      return {
        ...prev,
        [id]: {
          x: Math.max(0, Math.min(prev[id].x + x, parentRect.maxWidth - iconSize)),
          y: Math.max(
            0,
            Math.min(prev[id].y + y, parentRect.height - iconSize)
          ),
        },
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

