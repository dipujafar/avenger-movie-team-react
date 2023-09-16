import PropTypes from "prop-types"

const Card = ({actor,handleSelected}) => {
  const {name,age,country,salary,role,image} = actor;
    return (
        <div>
            <div className="card max-w-96 border-2 bg-orange-200  h-full  shadow-xl">
                <figure><img className="rounded-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                  <p><span className="font-bold">Name     :</span> {name}    </p>
                  <p><span className="font-bold">Age      :</span> {age}    </p>
                  <p><span className="font-bold">Role     :</span> {role}    </p>
                  <p><span className="font-bold">Salary   :</span> {salary}  </p>
                  <p><span className="font-bold">Country  :</span> {country} </p>
                  <div className="card-actions justify-center mt-2">
                  <button onClick={()=>handleSelected(actor)} className="btn btn-active btn-neutral">Select</button>
                  </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
  actor : PropTypes.object.isRequired,
  handleSelected : PropTypes.func.isRequired
}

export default Card;