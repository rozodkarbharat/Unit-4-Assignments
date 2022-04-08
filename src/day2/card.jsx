import styles from "./card.module.css"



function card (props)=>{
    console.log(props)
    const {name,organization, qualification,gender}=props

    return (
     <div className={Styles.card}>
     <div className={styles.left_content}>
     </div>
     </div>

        <div>
        <div className="right_content">
        <h1 style={{color:"green", fontSize="40px"}}>{organization}</h1>
        </div>
        </div>
    )
}