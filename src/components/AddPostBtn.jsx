import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddPostBtn() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/add-post")}
        style={{ background: "var(--primary)", fontWeight: "bold" }}
        className="btn  rounded-full fixed bottom-6 right-6 z-50 shadow-lg "
      >
        + Add Post
      </button>
    </div>
  );
}
