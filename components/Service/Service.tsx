import React from "react";

const SingleService: React.FC = ({ name, content }) => {
  return (
    <div>
      <h2>{name}</h2>
      {content.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={index}>{block.text}</p>;
        }
        if (block.type === "list") {
          return (
            <ul key={index}>
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
};

export default SingleService;
