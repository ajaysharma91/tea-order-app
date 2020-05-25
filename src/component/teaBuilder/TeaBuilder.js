import React from 'react';
import TeaControl from './teaControl/TeaControl';
import Box from '@material-ui/core/Box';
import {connect} from 'react-redux';
class TeaBuilder extends React.Component{
    render(){
        const {teacounts} = this.props;
        const gteaNo = teacounts['greenTea'];
        const gnteaNo = teacounts['gingerTea'];
        const mteaNo = teacounts['masalaTea'];

        console.log(gteaNo)
        return(
            <Box style={{backgroundColor:'grey'}}>
            <h1 style={{textAlign:'center', color:'orange'}}>Tea Order App</h1>
            <TeaControl teaType="Green Tea" noOfTea={gteaNo}/>
            <TeaControl teaType="Ginger Tea" noOfTea={gnteaNo}/>
            <TeaControl teaType="Masala Tea" noOfTea={mteaNo}/>
            </Box>
        )
    }
}

const mapsStateToProps = (state)=>{
    console.log("Builder");
    console.log(state);
    return{
        teacounts:state
    }
}

export default connect(mapsStateToProps)(TeaBuilder);