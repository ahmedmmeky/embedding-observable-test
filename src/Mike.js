import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@ahmedmmeky/plot-tooltip";

function Mike() {
  const secondPlotRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "secondPlot") return new Inspector(secondPlotRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={secondPlotRef} />
      <p>
        Credit:{" "}
        <a href="https://observablehq.com/@ahmedmmeky/plot-tooltip">
          Plot Tooltip by ahmedmmeky
        </a>
      </p>
    </>
  );
}

export default Mike;
