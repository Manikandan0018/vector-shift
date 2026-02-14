import React from "react";
import { Toolbar } from "./components/Toolbar";
import { PipelineUI } from "./PipelineUI";
import { SubmitButton } from "./components/SubmitButton";

export default function App() {
  return (
    <div className="min-h-screen">
      <Toolbar />
      <div className="p-6">
        <PipelineUI />
        <div className="flex justify-center mt-6">
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}
