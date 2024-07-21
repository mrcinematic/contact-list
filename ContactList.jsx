import { useEffect, useState } from "react";
import ContactRow from "../ContactRow/ContactRow";

function ContactList({setSelectedContactId}) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
      async function fetchContacts() {
        try {
          const res = await fetch(
            "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
          );
          const json = await res.json();
          console.log(json);
          setContacts(json);
        } catch (error) {
          console.error(error);
        }
      }
      fetchContacts();
    }, []);
    console.log(contacts);
    return(
    <>
       <h2>Contact List</h2>
      <table className="purpleRed">
        <thead className="purpleRed">
          <tr className="purpleRed">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody className="purpleRed">
          {contacts.map((contact) => (
            <ContactRow 
              key={contact.id} 
              contact={contact} 
              setSelectedContactId={setSelectedContactId}
              // contactId={contact.id}
            />
            // <ContactRow key={contact.id} name={contact.name} email={contact.email} phone={contact.phone}/>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ContactList;