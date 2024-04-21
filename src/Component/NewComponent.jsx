export default function NewComponent(props) {
  const { data } = props;
  console.log(data);

  // eslint-disable-next-line react/prop-types
  return (
    <div className="border p-10 text-3xl font-bold">Name: {data.name}</div>
  );
}
