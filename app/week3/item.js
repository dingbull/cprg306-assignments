export default function Item({ name, quantity, category }) {
    return (
      <li className="p-2 border-b border-gray-300">
        <strong>Name:</strong> {name} | 
        <strong>Quantity:</strong> {quantity} | 
        <strong>Category:</strong> {category}
      </li>
    );
  }
  