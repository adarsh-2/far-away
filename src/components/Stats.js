export default function Stats({ items }) {
  const numItems = items.length;

  if (numItems === 0)
    return (
      <p className="stats">
        {" "}
        <em>Start adding items to your list</em>{" "}
      </p>
    );

  const packedNum = items.filter((item) => item.packed).length;
  const percent = Math.round((packedNum / numItems) * 100);

  return (
    <footer className="stats">
      {percent === 100
        ? "You got everything to go. ✈️"
        : `You have ${numItems} items in your list, and you already packed ${packedNum}
      (${percent}%) of all.`}
    </footer>
  );
}
