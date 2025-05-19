import {
  collection,
  deleteDoc,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebaseconfg";
function FetchItems() {
  const [items, SetItems] = useState([]);
  const [editItem, SetEditItem] = useState([]);
  const [newName, SetNewName] = useState("");
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "items"), (snapshot) => {
      const itemList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      SetItems(itemList);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "items", id));
      alert("Data delete succesfully");
    } catch (error) {
      console.log(error);
    }
  };

  //handleUpdate
  const handleUpdate = async (id) => {
    if (newName.trim() === "") {
      alert("please enter name");
      return;
    }
    try {
      const itemRef = doc(db, "items", id);
      await updateDoc(itemRef, {
        name: newName,
      });
      alert("Data updated");
      SetEditItem(null);
      SetNewName("");
    } catch (error) {
      console.log(error);
    }
  };

  //handleEditclick
  const handleEditclick = (item) => {
    SetEditItem(item.id);
    SetNewName(item.name);
  };

  return (
    <>
      <h2>Data List</h2>
      <table>
        <thead>
          <tr>
            <th> Id</th>
            <th> Name</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>
                {editItem === item.id ? (
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => SetNewName(e.target.value)}
                  />
                ) : (
                  item.name
                )}
              </td>

              <td>
                {editItem === item.id ? (
                  <button onClick={() => handleUpdate(item.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEditclick(item)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default FetchItems;
