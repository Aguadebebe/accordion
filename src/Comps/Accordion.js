import AccordionItem from "./AccordionItem"

const Accordion = ({ letters, expandedId, handleToggle }) => {
    return (
        <ul>
            {letters.map((letter) => (
                <AccordionItem 
                key={letter.id} 
                letter={letter} 
                expandedId={expandedId}
                handleToggle={handleToggle}
                />
            ))}
        </ul>
    );
}

export default Accordion;

/** AccordionItem is a <li element that is being imported and mapped to the screen. */