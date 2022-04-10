import Card from "./Card"

const data={
    name: "Bharat",
    qualification:"Degree",
    organization:"Masai",
    gender:"male",
   imgUrl:"https://ca.slack-edge.com/T02QFJUB5DF-U02R6LRK6F6-e299c3e315ca-48"
}

function Employeedetail(){
    // console.log(data)
    return(
  <>
 <Card {...data}/>
  </>
    )
}

export default Employeedetail