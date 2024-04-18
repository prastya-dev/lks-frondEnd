import { useEffect, useState } from "react";
import axios from "axios";
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

  // State untuk menyimpan opsi tambahan yang akan ditampilkan
  const [additionalOptions, setAdditionalOptions] = useState([]);
  const[dist, setDis] = useState(true);

  // Fungsi untuk menambah opsi tambahan
  const addAdditionalOption = () => {
    setAdditionalOptions([...additionalOptions, `Option ${additionalOptions.length + 1}`]);
  };

  // Fungsi untuk menghapus opsi tambahan
  const removeAdditionalOption = (optionIndex) => {
    setAdditionalOptions(
      additionalOptions.filter((_, index) => index !== optionIndex)
    );
  };

  const [nameInput, setNameInput] = useState("");
  const [choiceTypeInput, setChoiceTypeInput] = useState(1);

  useEffect(() => {
    if (name) {
      setNameInput(name);
    }
    if (choiceType) {
      setChoiceTypeInput(choiceType);
    }
    // Reset opsi tambahan saat pilihan berubah
    setAdditionalOptions([]);
  }, [name, choiceType]);

  const data = { name, choiceType, additionalOptions }; // Menambah properti additionalOptions pada objek data

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
              // Menambah atau menghapus opsi tambahan berdasarkan pilihan
              if (item.value === 5 || item.value === 6 || item.value === 7) {
                // Hanya tambahkan opsi tambahan jika belum ada
                setDis(false);
                if (additionalOptions.length === 0) {
                  addAdditionalOption();
                }
              } else {
                // Jika bukan multiple choice, dropdown, atau checkboxes, hapus semua opsi tambahan
                setAdditionalOptions([]);
                setDis(true);
                
              }
            }}
          />
        </div>
      </div>

      {/* Menampilkan opsi tambahan */}
      <div className="flow-roott">
        {additionalOptions.map((option, index) => (
          <div className="flex gap-2 p-1">
          <input
           key={index}
            disabled={disabled}
            type="text"
            className="block w-25% border-b-5 rounded-md"
            ></input>
            <button
              className="ml-1 text-red-500"
              onClick={() => removeAdditionalOption(index)}
            >
              (Remove)
            </button>
          
          </div>
        ))}
      </div>

      {/* Tombol untuk menambah opsi tambahan */}
      <div>
        {!disabled && !dist &&( // Hanya tampilkan tombol jika tidak dalam mode disabled
          <button
            className="bg-gray-200 px-2 py-1 rounded-md text-sm text-gray-700 hover:bg-gray-300"
            onClick={addAdditionalOption}
          >
            Add Option
          </button>
        )}
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
