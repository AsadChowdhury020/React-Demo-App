import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <section className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <label className="block mb-1 text-sm font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </section>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
