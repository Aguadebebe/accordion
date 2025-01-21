

const AccordionItem2 = ({ letterTwo, expandedIds, handleToggleTwo}) => {
    return (
        <li>
        <button onClick={() => handleToggleTwo(letterTwo.id)}>{letterTwo.title}</button>
        {expandedIds.includes(letterTwo.id) && <div>{letterTwo.content}</div>}
        </li>
    );
};

export default AccordionItem2;