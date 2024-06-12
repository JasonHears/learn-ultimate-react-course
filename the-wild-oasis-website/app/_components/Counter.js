"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  console.log(users);

  return (
    <>
      <p>There are {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>
        {users[count].name}
      </button>
    </>
  );
}