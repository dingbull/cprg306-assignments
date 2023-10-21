// /app/week6/item.js

export default function Item({ name, quantity, category }) {
    return (
      <div className="p-2 border-b border-gray-800">
        <strong>{name} </strong> 
        <br />
        <text>Buy </text> {quantity}  
        <text> in </text> {category}
      </div>
    );
  }
  