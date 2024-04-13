import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="mb-9 text-3xl font-bold tracking-tight text-gray-900">
        List Forms
      </h1>

      <div className="mb-6 flex items-start">
        <Link
          to="/form-add"
          className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add New Form
        </Link>
      </div>

      <div className="grid grid-cols-4">
        {/* card */}
        <Link
          className="p-4 border rounded-md hover:border-indigo-600"
          to="/form"
        >
          <p className="text-lg font-medium">Untitled Form</p>
          <p className="text-sm">Updated 9 Apr, 2024</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
