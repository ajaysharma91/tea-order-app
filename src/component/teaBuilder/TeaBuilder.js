import React from 'react';
import TeaControl from './teaControl/TeaControl';
import {Box, Button} from '@material-ui/core';
import {connect} from 'react-redux';
class TeaBuilder extends React.Component{
    checkout = (e)=>{
        console.log("order it");
        this.props.history.push("/checkout");
    }
    render(){

        const {teacounts} = this.props;
        const gteaNo = teacounts['greenTea'];
        const gnteaNo = teacounts['gingerTea'];
        const mteaNo = teacounts['masalaTea'];
        let totalPrice = teacounts['totalPrice'];
        let noOfItem = gteaNo + gnteaNo + mteaNo;
        const message = this.props.costomer.checkout;

        if(message){
            totalPrice=0;
            noOfItem=0;
        }
        const valiButton = noOfItem>0?<Button variant="contained" color="primary" 
        style={{marginLeft:'28px',marginTop:'10px',marginBottom:'10px'}}
        onClick={this.checkout}>Order It</Button>:<Button variant="contained" color="primary" 
        style={{marginLeft:'28px',marginTop:'10px',marginBottom:'10px'}}
        disabled onClick={this.checkout}>Order It</Button>;

  //console.log(costomer.checkout);

        return(
            <Box style={{backgroundColor:'grey'}}>
            <h1 style={{textAlign:'center', color:'orange'}}>Tea Order App</h1>
            <TeaControl teaType="greenTea" price={teacounts['greenTeaPrice']}/>
            <TeaControl teaType="gingerTea"  price={teacounts['gingerTeaPrice']}/>
            <TeaControl teaType="masalaTea"  price={teacounts['masalaTeaPrice']}/>
            <div className="section container " style={{marginLeft:'28px',marginTop:'10px'}}><span>Total Item: {noOfItem>0?noOfItem:""}</span> </div>
            <div className="section container" style={{marginLeft:'28px',marginTop:'10px'}}><span>Price: {totalPrice>0?totalPrice:""}</span> </div>
            {/* <Button variant="contained" color="primary" 
            style={{marginLeft:'28px',marginTop:'10px',marginBottom:'10px'}}
            >Order It</Button> */}
            {valiButton} <span>{message?"Ordered Successfully":" "}</span>
            </Box>
        )
    }
}

const mapsStateToProps = (state)=>{
    console.log("Builder");
    console.log(state);
    return{
        teacounts:state.tea,
        costomer:state.costomer
    }
}

export default connect(mapsStateToProps)(TeaBuilder);