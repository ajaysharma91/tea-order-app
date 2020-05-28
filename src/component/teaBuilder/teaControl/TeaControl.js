import React from 'react';
import { Container } from '@material-ui/core';
import {connect} from 'react-redux';
import moreTea from '../../../action/teaAddAction';
import lessTea from '../../../action/teaLessAction';

const TeaControl = (props)=>{
  let typeTea = "";
  switch(props.teaType){
      case "Masala Tea": 
      typeTea="masalaTea";
      break;
      case "Green Tea": 
      typeTea="greenTea";
      break;
      default:
      typeTea="gingerTea";
  }
    const addTea = () =>{
        console.log(typeTea);
        props.moreTea(typeTea);
    }
    const lessTea = () =>{
        console.log("less");
        props.lessTea(typeTea);
    }
    return(
        <>
            <Container className="section container">
                <table>
                    <tr>
                        <td><h3>{props.teaType}</h3>
                        <span>Rs.{props.price >0?props.price:""}</span>
                        <span> Full Cup Tea.</span></td>
                        <td><button onClick={addTea}>More</button></td>
                        <td><button onClick={lessTea}>Less</button></td>
                        <td><span>{props.noOfTea>0?props.noOfTea:""}</span></td>
                    </tr>
                </table>
            </Container>
        </>
    )
}
const mapsStateToProps = (state)=>{
    console.log(state);
    return{

    }
}
const mapDispatchToProps = (dispatch) =>{
    console.log("mapDispatchToProps");

    return {
    moreTea: (value) => dispatch(moreTea(value)),
   lessTea: value => dispatch(lessTea(value))
    }

}
export default connect(mapsStateToProps,mapDispatchToProps)(TeaControl);