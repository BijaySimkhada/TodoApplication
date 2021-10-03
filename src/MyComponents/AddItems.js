import React, { useState } from "react";

export const AddItems = ({ addItems }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Missing content");
    } else {
      addItems(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <form className="container my-3" onSubmit={submit}>
      <h5>Add Tasks Here</h5>
      <div class="mb-3">
        <label forHtml="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label forHtml="exampleInputPassword1" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
      <hr />
    </form>
  );
};
