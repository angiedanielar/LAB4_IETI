import React from 'react'
import OutlinedCard from './OutlinedCard';


const CardList = ({lista}) => {

    return (
        <div>
            {lista.map((element, i) => (<OutlinedCard description={element.description} 
            responsible={element.responsible} status={element.status} dueDate={element.dueDate}/>))}
        </div>
    )
}

export default CardList;
