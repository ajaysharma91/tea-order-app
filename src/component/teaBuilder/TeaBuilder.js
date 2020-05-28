import React from 'react';
import TeaControl from './teaControl/TeaControl';
import {Box, Button} from '@material-ui/core';
import {connect} from 'react-redux';
class TeaBuilder extends React.Component{
    render(){
        const {teacounts} = this.props;
        const gteaNo = teacounts['greenTea'];
        const gnteaNo = teacounts['gingerTea'];
        const mteaNo = teacounts['masalaTea'];
        const totalPrice = teacounts['totalPrice'];
        const noOfItem = gteaNo + gnteaNo + mteaNo;
        const valiButton = noOfItem>0?<Button variant="contained" color="primary" 
        style={{marginLeft:'28px',marginTop:'10px',marginBottom:'10px'}}
        >Order It</Button>:<Button variant="contained" color="primary" 
        style={{marginLeft:'28px',marginTop:'10px',marginBottom:'10px'}}
  disabled>Order It</Button>;

        return(
            <Box style={{backgroundColor:'grey'}}>
            <h1 style={{textAlign:'center', color:'orange'}}>Tea Order App</h1>
            <TeaControl teaType="Green Tea" noOfTea={gteaNo} price={teacounts['greenTeaPrice']}/>
            <TeaControl teaType="Ginger Tea" noOfTea={gnteaNo} price={teacounts['gingerTeaPrice']}/>
            <TeaControl teaType="Masala Tea" noOfTea={mteaNo} price={teacounts['masalaTeaPrice']}/>
            <div className="section container " style={{marginLeft:'28px',marginTop:'10px'}}><span>Total Item: {noOfItem>0?noOfItem:""}</span> </div>
            <div className="section container" style={{marginLeft:'28px',marginTop:'10px'}}><span>Price: {totalPrice>0?totalPrice:""}</span> </div>
            {/* <Button variant="contained" color="primary" 
            style={{marginLeft:'28px',marginTop:'10px',marginBottom:'10px'}}
            >Order It</Button> */}
            {valiButton}
            </Box>
        )
    }
}

const mapsStateToProps = (state)=>{
    console.log("Builder");
    console.log(state);
    return{
        teacounts:state,
    }
}

export default connect(mapsStateToProps)(TeaBuilder);