import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@observablehq/downloading-and-embedding-notebooks";

function Breakout() {
  const demoRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "demo") return new Inspector(demoRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={demoRef} />
      <p>
        Credit:{" "}
        <a href="https://observablehq.com/@observablehq/downloading-and-embedding-notebooks">
          Advanced Embedding and Downloading by Observable
        </a>
      </p>
    </>
  );
}

export default Breakout;
