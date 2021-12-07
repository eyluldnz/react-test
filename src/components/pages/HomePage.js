import Card from "../Card";
import {useState} from 'react';

function HomePage(){

    const [cardCount,setCardCount]=useState(2);

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 my-3">
                    <button className="btn btn-primary" onClick={()=>setCardCount(cardCount+1)}>+</button>
                </div>
            </div>
            {
                [...Array(cardCount)].map((item,index)=>{
                    return (
                        <div className="col-sm-3 mb-2" key={index}>
                            <Card/>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default HomePage