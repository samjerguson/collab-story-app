import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from "./utils/firebaseConfig";
import { ref, push } from "firebase/database";
import { doc, setDoc, updateDoc } from "firebase/firestore"; 
//test
async function setDocument(docID){
  await setDoc(doc(db, "Display", docID), {})
}

async function update(docID){
  await updateDoc(doc(db, "Display", docID), {test: "test"})
}

function App() {
  var date = new Date()
  var id = date.getFullYear().toString() + (date.getMonth()+1).toString() + date.getDate().toString() + date.getHours().toString() + date.getMinutes().toString()
  const [docID, setDocID] = useState(id)
  //setDocID(id)
  console.log(docID)

  setDocument(docID)

  return(
    <>
      <button onClick={()=>update(docID)}>Update document</button>
      <button onClick={()=>setDocument(docID)}>Create document</button>
    </>
  )
}


export default App;