import React from 'react';
import Card from './Card';
import './CardList.css';



const Cardlist = ({robots}) => {
    
    return (
<div className='list'>
{
     robots.map((robot, i) => { 
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
}
</div>
 
    )

    
}




export default Cardlist;