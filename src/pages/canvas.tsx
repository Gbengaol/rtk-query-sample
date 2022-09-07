import { FC, useEffect, useRef } from "react";

interface CanvasProps {}

export const Canvas: FC<CanvasProps> = () => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  useEffect(() => {
    const ctx = canvasRef?.current?.getContext("2d");
    if (ctx) {
      // ctx.beginPath();
      // ctx.rect(0, 0, 100, 100);
      // ctx.moveTo(150, 100);
      // ctx.lineTo(100, 200);
      // ctx.lineTo(200, 200);
      // ctx.fill();
      // ctx.fillStyle = "#700c15";
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();
    }
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <canvas
        height={300}
        width={300}
        ref={canvasRef}
        id="canvasRef"
        style={{ border: "1px solid red" }}
      />
    </div>
  );
};
