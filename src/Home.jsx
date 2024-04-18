import { Link , useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios  from "axios"
import { key } from "localforage";

function Home() {
const [forms, setForms] = useState([]);
const [error,setError] = useState('');
 const navvv = useNavigate();

useEffect(() => {
 
  const apikey = localStorage.getItem('apikey');
  if(!apikey){
    navvv('/login');
    return;
  }
  const fechForms = async () =>{ 
    try{
    const response = await axios.get('http://127.0.0.1:8000/api/v1/forms', {headers: {"Authorization" : `Bearer ${apikey}`}});
    setForms(response.data.forms);
    console.log(forms);
     } catch(error){
      setError(error.response.data.message);
    }
};
fechForms();
},[]);


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

      <div className="grid grid-cols-4 m-5 p-6">
        {/* card */}
        {forms.map((form) => ( 
          
        <Link
        
          className="p-4 border rounded-md hover:border-indigo-600 m-3"
          to={`/form/${form.slug}`}
        >
          <p className="text-lg font-medium">{form.name} </p>
          <p className="text-sm">{form.description}</p>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default Home;
