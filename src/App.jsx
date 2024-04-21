import NewComponent from "./Component/NewComponent";

export default function App() {
  // const name1 = "John";
  // const name2 = "Doe";
  // const name3 = "Smith";
  const array = ["john", "doe", "smith"];
  const arrayOfObject = [
    { name: "John", email: "john@example.com" },
    { name: "Doe", email: "doe@example.com" },
    { name: "smith", email: "smith@example.com" },
    { name: "smith", email: "" },
  ];

  console.log(arrayOfObject);
  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-3 gap-5">
        {arrayOfObject.map((item, index) => (
          <NewComponent key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
