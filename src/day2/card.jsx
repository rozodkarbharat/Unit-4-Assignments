import styles from "./card.module.css"

const rightStyling={
    color:"blue",
    padding:"2px"

}

function Card (props){
console.log(props)
const {name,qualification,imgUrl,gender,organization}=props
    return (
     <div  className= {styles.Card}>
     <div className="left_content">
         <img src={imgUrl} alt="name" />
     </div>
   
        <div className="right_content">
      <h1 style={{color:"green"}}>{organization}</h1>
      <h2 style={rightStyling}>Name:{name}</h2>
      <h2>Gender:{gender}</h2>
      <h2>Qualifiaction:{qualification}</h2>

        </div>
        </div>
    )
}
export default Card