import { useEffect, useState } from "react";
import Card from "../card/Card";
import PropTypes from "prop-types"
const Cards = ({handleSelected}) => {
    const [actors, setActors] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActors(data))
    },[])
    return (
        <div className="md:w-2/3 mx-2 ">
           <div className="grid grid-cols-3 gap-2">
           {
                actors.map(actor=><Card key={actor.id} actor={actor} handleSelected={handleSelected}></Card>)
            }
           </div>
        </div>
    );
};
Cards.propTypes = {
    handleSelected : PropTypes.func.isRequired
}

export default Cards;