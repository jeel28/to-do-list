import React, { useState } from "react";

export default function Todoforms(props) {
  // state
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({
      id: Math.floor(Math.random() * 100000),
      text: input,
      isComplete: false,
    });
    setInput("");
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Add a todo"
        onChange={handleChange}
        className='Todo-input'
        value={input}
        name="text"
      />
      <button type="submit" onClick={handleSubmit} className="todo-btn">
        Add todo
      </button>
    </form>
  );
}
