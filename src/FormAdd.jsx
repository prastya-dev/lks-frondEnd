import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FormAdd() {

 const [name, setName] = useState('');
 const [slug, setSlug] = useState('');
 const [description, setDes] = useState('');
 const [allowedDomain, setDom] = useState('');
 const [limit, setlimit] = useState(false);
 const [error, setError] = useState('');
 const apikey = localStorage.getItem('apikey');
 const navigation = useNavigate();

useEffect(() => {

  
},[])
const limittt = () =>{
  setlimit(current => !current)
}
 const heandleSubmit = async (e) =>{
  e.preventDefault();
  try{
   const fechData = await axios.post(
    'http://127.0.0.1:8000/api/v1/forms', 
    {
      name:name,
      slug:slug,
      description:description,
      allowed_domain:allowedDomain, 
      limit_one_response:limit,
    },
    {
      headers:{
        "Authorization" : `Bearer ${apikey}`,
        "Accept" : "application/json"
      },
    }
  
  );
  console.log(fechData);
  navigation('/');
  }catch(error){
    setError(error.response.data.message);
  }

 }










  return (
    <div>
     
      <h1 className="mb-6 text-xl font-bold">Create Form</h1>
 <form className="space-y-6" action="#" method="POST" onSubmit={heandleSubmit}>
      <div className="mb-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
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
          value={description}
          onChange={(e) => setDes(e.target.value)}
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
          value={allowedDomain}
          onChange={(e) => setDom(e.target.value)}
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
            value={limit}
           onChange={limittt}
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
      {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
}

export default FormAdd;
