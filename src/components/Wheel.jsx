import React, { useRef, useEffect, useState } from "react";

export const Wheel = ({ segments, onComplete }) => {
  const canvasRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    segments.forEach((segment, index) => {
      const angle = (2 * Math.PI) / segments.length;
      const startAngle = index * angle + rotation;
      const endAngle = startAngle + angle;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.fillStyle = segment.color;
      ctx.fill();
      ctx.stroke();

      // Draw text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + angle / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#000";
      ctx.font = "15px Arial";
      ctx.fillText(segment.label, radius - 10, 0);
      ctx.restore();
    });
  }, [segments, rotation]);

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const spinTime = Math.random() * 3 + 3; // Random spin time between 3 and 6 seconds
    const totalRotation = Math.random() * 360 + 1440; // Random total rotation between 1440 and 1800 degrees

    let start = null;
    const animate = (time) => {
      if (!start) start = time;
      const elapsed = time - start;

      setRotation((elapsed / (spinTime * 1000)) * totalRotation);

      if (elapsed < spinTime * 1000) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        const finalRotation = (elapsed / (spinTime * 1000)) * totalRotation;
        const winningIndex = Math.floor(
          ((finalRotation % 360) / 360) * segments.length
        );
        onComplete(segments[winningIndex]);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <button
        onClick={spinWheel}
        disabled={isSpinning}
       
        className="mt-4 px-4 py-2 bg-black text-white rounded-lg  transition duration-300 ease-in-out"
      >
        Spin
      </button>
      <canvas
        ref={canvasRef}
        className=" rounded-lg  "
        width="320" // Set width and height attributes
        height="320" 
      ></canvas>
    </div>
  );
};
