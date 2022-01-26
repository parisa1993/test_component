import Button from "./components/Button";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: 600
      }}
    >
      <Button>Normal Button</Button>
      <Button btnColor="blue" type="outline">
        Outline Button
      </Button>
      <Button btnColor="red" disabled>
        Disabled Button
      </Button>
      <Button btnColor="yellow" type="rounded" labelColor="black">
        Rounded Button
      </Button>
      <Button type="block" btnColor="black">
        Block Button
      </Button>
    </div>
  );
}
