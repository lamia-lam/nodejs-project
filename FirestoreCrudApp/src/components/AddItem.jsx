import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "./firebaseconfg";

function AddItem() {
  const [itemname, SetItemName] = useState("");
  const handleAddItem = async () => {
    if (itemname.trim()) {
      try {
        await addDoc(collection(db, "items"), { name: itemname });
        alert("Data Added");
        SetItemName("");
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <h1>Add data into firestore</h1>
      <div>
        <input
          type="text"
          value={itemname}
          onChange={(e) => SetItemName(e.target.value)}
          placeholder="Enter items name"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={handleAddItem}
        >
          Add item
        </button>
      </div>
    </>
  );
}
export default AddItem;
