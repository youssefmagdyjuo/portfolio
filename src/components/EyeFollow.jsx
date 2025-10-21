import { useEffect, useRef } from "react";

export default function EyeFollow({style}) {
const pupilRef = useRef(null);
  const eyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eye = eyeRef.current;
      const pupil = pupilRef.current;

      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;

      const angle = Math.atan2(dy, dx);
      const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

      // limit the movement to stay inside the eye
      const distanceLimit = window.innerWidth < 600 ? 5.5 :window.innerWidth < 920 ? 8 : 14;
      const maxMove = rect.width / 2 - distanceLimit; // half pupil size
      const move = Math.min(distanceFromCenter, maxMove);

      const x = move * Math.cos(angle);
      const y = move * Math.sin(angle);

      pupil.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={eyeRef}className="eye" style={style}>
      <div ref={pupilRef} className="pupil-container">
        <div className="pupil">
          <div className="pupil-light"></div>
        </div>
      </div>
    </div>
  );
}