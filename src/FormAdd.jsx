function FormAdd() {
  return (
    <div>
      <h1 className="mb-6 text-xl font-bold">Create Form</h1>

      <div className="mb-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 p-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="mb-2">
        <label
          htmlFor="slug"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Slug
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="slug"
            id="slug"
            className="block w-full rounded-md border-0 p-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="desc"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Description
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="desc"
            id="desc"
            className="block w-full rounded-md border-0 p-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="mb-2">
        <label
          htmlFor="allowed_domain"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Allowed Domains
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="allowed_domain"
            id="allowed_domain"
            className="block w-full rounded-md border-0 p-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="mb-6">
        <p className="block text-sm font-medium leading-6 text-gray-900">
          Limit to 1 response
        </p>
        <div className="mt-2">
          <input
            type="checkbox"
            className="peer sr-only opacity-0"
            id="toggle"
          />
          <label
            htmlFor="toggle"
            className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
          >
            <span className="sr-only">Enable</span>
          </label>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Form
        </button>
      </div>
    </div>
  );
}

export default FormAdd;
