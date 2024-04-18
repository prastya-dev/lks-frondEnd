import { ClipboardIcon } from "@heroicons/react/20/solid";
import QuestionForm from "./components/QuestionForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const exampleQuestion = {
  id: null,
  name: "",
  choiceType: 1,
  choices: [],
};

function FormAdd() {
  const [questions, setQuestions] = useState([exampleQuestion]);
  const [dataa, setDatt] = useState({});
  const [errorr, setError] = useState(false);
  const { slug } = useParams();
  const url = "http://127.0.0.1:8000/api/v1";
  const apikey = localStorage.getItem('apikey');
  const navigate = useNavigate();



 const detailForm = async () => {
  try{
    const fetchDetail = await axios.get(url + '/forms/' + slug, {headers:{"Authorization" : `Bearer ${apikey}`} });
    setDatt(fetchDetail.data.data); 
    // console.log(fetchDetail);
  }catch(error){
    setError(true);
    console.log(error.response.data.message);
    navigate('./');
    
  }
}


if (errorr) {
  navigate('/'); // Redirect to home page if there is an error
  return null; // Render nothing else
}


/////////
useEffect(() => {
  
  detailForm();
},[]);





///delete func
  const deleteQ = async (e) => {
 try{
  const deleteQuest = await axios.delete(
    url + '/forms/' + slug + `/question/` + e, 
    {headers:{
      "Authorization" : `Bearer ${apikey}`
    }}

  );
  detailForm();
 }catch(error){
 console.log(error);
 }
  }
  ///
  const createQ = async (e) => {
    try{
     const deleteQuest = await axios.post(
       url + '/forms/' + slug + `/question`, 
       {
          "name" : e.name,
          "choiche_type" : e.choiceType,
          "choices" : "value",
          "is_required": true
       },
       {headers:{
         "Authorization" : `Bearer ${apikey}`,
          "Accept" : "apllication/json"
       }}
   
     );
     detailForm();
    }catch(error){
    console.log(error);
    }
     }
  





  const addQuestion = () => {
    setQuestions([...questions, exampleQuestion]);
  };

  return (
    <div>
      <h1 className="mb-6 text-xl font-bold">Form Detail</h1>
      
      <div className="mb-2">
        <p className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </p>
        <p>{dataa.name}</p>
      </div>

      <div className="mb-4">
        <p className="block text-sm font-medium leading-6 text-gray-900">
          Description
        </p>
        <p> {dataa.description}</p>
      </div>

      <div className="mb-2">
        <label
          htmlFor="allowed_domain"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Form Url
        </label>
        <div className="flex mt-2 gap-1">
          <div className="relative rounded-md shadow-sm">
            <div className="bg-gray-200 block w-full rounded-md border-0 py-1 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              http://localhost:3000/form/asdf
            </div>
          </div>
          <button className="rounded-md ring-1 ring-inset ring-gray-300 bg-gray-200 py-1 px-2">
            <ClipboardIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-9">
        <h1 className="mb-6 text-xl font-bold">Questions</h1>

        <div className="mb-4 flex flex-col gap-4">
          {dataa.questions?.map((q, idx) => (
            <QuestionForm
              formid= {dataa.id}
              key={idx}
              disabled={true}
              name={q.name}
              onSave={(data) => {
                console.log("save", data);
                
              }}
              onDelete={(data) => {
                deleteQ(q.id);
                console.log("delete", q);
               
              }}
            />
          ))}
          {/* ////////////////////////////////////// */}
          {questions.map((q, idx) => (
            <QuestionForm
              formid= {dataa.id}
              key={idx}
              disabled={q.is_saved}
              name={q.name}
              onSave={(data) => {
                console.log("save", data);
                createQ(data);
                
              }}
              onDelete={(data) => {
                console.log("delete", data);
                setQuestions(questions.filter((_, i) => i != idx));
              }}
            />
          ))}
        </div>

        <div className="border-t border-gray-300 pt-6 flex justify-center">
          <button
            className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={addQuestion}
          >
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormAdd;
