import { useEffect, useState } from "react"

function SelectedContact ({selectedContactId, setSelectedContactId}) {
  const [singleContact, setSingleContact] = useState(null)
  
  useEffect(() => {
    // define our async funtion for getting a single contact by ID
    async function fetchContact() {
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`)
        const result = await response.json()
        setSingleContact(result)
        console.log(result)
      } catch(error) {
        console.log(error);
      }
    }
    // call that function
    fetchContact()
    // use the results to display some contact data
  }, [selectedContactId])

  return (
    <>
      {singleContact === null 
        ? <div>No Contact Selected</div> 
        : <div>
            <p>{singleContact.name}</p>
            <p>{singleContact.email}</p>
            <p>{singleContact.phone}</p>
            <p>{singleContact.website}</p>
            <button onClick={() => setSelectedContactId(null)}>Back to List</button>
          </div>
          }
    </>
  )
};

export default SelectedContact