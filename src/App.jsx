import { useState } from "react"
import ContactList from "./components/ContactList"
import './App.css'
import SelectedContact from "./components/SelectedContact";

// const [contacts, setContacts] = dummyContacts();
// console.log("Contacts: ", contacts);

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
    {selectedContactId === null
      ? <ContactList setSelectedContactId={setSelectedContactId} />
      : <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
    }
    </>
  );
}


