import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@ahmedmmeky/three-js-4";

function ThreeJs() {
  const finalRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "final") return new Inspector(finalRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={finalRef} />
      <p>
        Credit:{" "}
        <a href="https://observablehq.com/@ahmedmmeky/three-js-4">
          Three.js by ahmedmmeky
        </a>
      </p>
    </>
  );
}

export default ThreeJs;
