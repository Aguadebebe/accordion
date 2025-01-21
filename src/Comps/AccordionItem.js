

const AccordionItem = ({ letter, expandedId, handleToggle }) => {
   
    return (
        
          <li className="letter">
          <button onClick={() => handleToggle(letter.id)}>
             {letter.title}
          </button>
          {expandedId === letter.id && <div>{letter.content}</div>}
          </li>
        
    );
};

export default AccordionItem;