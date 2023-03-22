import React from "react";

export const List = ({ list }) => {
  return (
    <>
      {list.map((i, index) => {
        return (
          <ul key={index}>
            <li>{i.id}</li>
            <li>{i.task}</li>
          </ul>
        );
      })}
    </>
  );
};
