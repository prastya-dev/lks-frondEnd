import { useEffect, useState } from "react";
import SelectChoiceType from "./SelectChoiceType";

QuestionForm.propTypes = {
  name: String,
  choiceType: Number,
  disabled: Boolean,
  onSave: Function,
  onDelete: Function,
};

function QuestionForm(props) {
  const { name, choiceType, disabled, onSave, onDelete } = props;

  const [nameInput, setNameInput] = useState("");
  const [choiceTypeInput, setChoiceTypeInput] = useState(1);

  useEffect(() => {
    if (name) {
      setNameInput(name);
    }
    if (choiceType) {
      setChoiceTypeInput(choiceType);
    }
  }, [name, choiceType]);

  const data = { name, choiceType };

  const handleSave = () => {
    onSave(data);
  };

  const handleDelete = () => {
    onDelete(data);
  };

  return (
    <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-md">
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            disabled={disabled}
            type="text"
            className="block w-full rounded-md border-0 p-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Question"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <div className="w-[200px]">
          <SelectChoiceType
            disabled={disabled}
            value={choiceTypeInput}
            onChange={(item) => {
              setChoiceTypeInput(item.id);
            }}
          />
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4 flex gap-4 justify-end">
        {!disabled ? (
          <button
            className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSave}
          >
            Save
          </button>
        ) : null}
        <button
          className="flex justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default QuestionForm;
