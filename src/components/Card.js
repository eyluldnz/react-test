import { useState } from "react"

function Card() {
    const [state,setState] = useState({count:0,name:'X'});
    return (
        <div className="card" >

            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6>
                    {state.count}
                </h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button name="count"
                    onClick={()=>setState({...state, count:state.count+1})}>+</button>

            </div>
        </div>
    )
}

export default Card