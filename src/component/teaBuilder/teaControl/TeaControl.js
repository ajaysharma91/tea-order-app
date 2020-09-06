import React from 'react';
import { Container } from '@material-ui/core';
import {connect} from 'react-redux';
import moreTea from '../../../action/teaAddAction';
import lessTea from '../../../action/teaLessAction';
import { render } from '@testing-library/react';

class TeaControl extends React.Component {
    constructor(props){
        super(props);
        this.state={
            greenTea:{
                count:0,
                price:30,
                name:'Green Tea'
            },
            masalaTea:{
                count:0,
                price:15 ,
                name:'Masala Tea'    
                   },
            gingerTea:{
                count:0,
                price:20,name:'Ginger Tea'
            },
            totalPrice: 0,
        }
    }
//   let typeTea = "";
//   switch(this.props.teaType){
//       case "Masala Tea": 
//       typeTea="masalaTea";
//       break;
//       case "Green Tea": 
//       typeTea="greenTea";
//       break;
//       default:
//       typeTea="gingerTea";
//   }
     addTea = () =>{
         this.props.costomer.checkout=false;
        //console.log(this.props.typeTea);
        const updateTeaType = ++this.state[this.props.teaType].count;
        this.setState({count:updateTeaType});
        this.props.moreTea(this.props.teaType);
    }
     lessTea = () =>{
        this.props.costomer.checkout=false;
        console.log("less");
        const updateTeaType = this.state[this.props.teaType].count>0?--this.state[this.props.teaType].count:0;
        this.setState({count:updateTeaType});
        this.props.lessTea(this.props.teaType);
    }
    render(){
        var teaType = this.props.teaType;
        console.log(teaType);
        return(
            <>
                <Container className="section container">
                    <table>
                        <tr>
                            <td><h3>{this.state[teaType].name}</h3>
                            <span>Rs.{this.state[teaType].price}</span>
                            <span> Full Cup Tea.</span></td>
                            <td><button onClick={this.addTea}>More</button></td>
                            <td><button onClick={this.lessTea}>Less</button></td>
                            <td><span>{this.state[teaType].count>0?this.state[teaType].count:""}</span></td>
                        </tr>
                    </table>
                </Container>
            </>
        );
    }
    
}
const mapsStateToProps = (state)=>{
    return{
        costomer:state.costomer
    }
}
const mapsDispatchToProps = (dispatch) =>{
    console.log("mapDispatchToProps");

    return {
    moreTea: (value) => dispatch(moreTea(value)),
   lessTea: value => dispatch(lessTea(value))
    }

}
export default connect(mapsStateToProps,mapsDispatchToProps)(TeaControl);