import AccordionItem2 from "./AccordionItem2"

const Accordion2 = ({ lettersTwo, expandedIds, handleToggleTwo} ) => {
    return (
        <ul> 
          <div>Multiple Selection Accordion</div>
          {lettersTwo.map((letterTwo) => (
            <AccordionItem2 
            key={letterTwo.id}
            letterTwo={letterTwo}
            expandedIds={expandedIds}
            handleToggleTwo={handleToggleTwo}
            />
          ))}
        </ul>
    );
};

export default Accordion2;