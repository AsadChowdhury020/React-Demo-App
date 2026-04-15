import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        React Demo App
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Counter  />
        <Form />
      </div>
    </div>
  );
}

export default App;