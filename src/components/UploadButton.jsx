import React from "react";

export default function Button() {
  return (
    <div>
      <button
        style={{ width: "100px", fontFamily: "var(--font)" }}
        className="btn rounded-full  shadow-[0_3px_0_rgba(0,0,0,0.75)] hover:shadow-[0_0_0_rgba(0,0,0,0.75)] transition-all duration-150"
      >
        Default
      </button>
    </div>
  );
}
