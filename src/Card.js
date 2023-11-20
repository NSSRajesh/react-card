import { Component } from "react";

class Card extends Component{
    
   render(){
        const {userData}=this.props
        const storeData=userData.map((e)=>{
            return(
                <div className="card-col">
                    <div className="card-card">
                        <h2>{e.name}</h2>
                        <div className="prize-time">
                            <h3>{e.prize}</h3>
                            <h4>{e.time}</h4>
                        </div>    
                        <p>{e.special}</p>
                    </div>
                </div>
                )
        })
        return(
            <div>
                <section id="card-sec">
                    <div className="card-con">
                        <div className="card-row">
                            {storeData}
                        </div>
                    </div>
                </section>
            </div>
        )
   }

}

export default Card;