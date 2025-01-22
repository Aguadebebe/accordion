import  Accordion from "./Accordion";
import  Accordion2 from "./Accordion2";
import { useState } from "react";
import '../App.css';

function App() {
  
  const [expandedId, setExpandedId] = useState(null);
  const [expandedIds, setExpandedIds] = useState([]);
 
     

  const handleToggle = (id) => {
      setExpandedId((currentId) => (currentId === id ? null : id));
  };

  const handleToggleTwo = (id) => {
      setExpandedIds((currentIds) => 
      currentIds.includes(id) 
      ? currentIds.filter((currentId) => currentId !== id) : [...currentIds, id]); 
  };

  const letters = [
    { id: 1, title: "A", content: "Hey"},
    { id: 2, title: "B", content: "Yea!"},
    { id: 3, title: "C", content: "Hiy" },
  ];

  const lettersTwo = [
    { id: 4, title: "A", content: "Yup yup"},
    { id: 5, title: "B", content: "Howdy!"},
    { id: 6, title: "C", content: "Ticklins!"},
  ];

   
  
  return (
    <div className="App-container"> 
      <div>Single Selection Accordion</div>
      <Accordion 
      letters={letters}
      expandedId={expandedId}
      handleToggle={handleToggle}
      />
      <Accordion2 
      lettersTwo={lettersTwo}
      expandedIds={expandedIds}
      handleToggleTwo={handleToggleTwo}
      />
    </div>
  );
};

export default App;
