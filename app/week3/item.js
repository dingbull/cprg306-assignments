// item.js

function Item({ name, quantity, category }) {
    return (
      <li className="flex justify-between">
        <span>{name}</span>
        <span>{quantity}</span>
        <span>{category}</span>
      </li>
    );
  }
  
  export default Item;
  