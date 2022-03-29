import React from 'react'
import {connect} from "react-redux"
import QbankNB from '../../src/components/navbars/QbankNB'

const myQuestionBank = (props) =>{
console.log(props.teacher)

return (
    <div>
        <QbankNB/>
        <h2>My Question Bank</h2>
    </div>
)
}


  const mstp = (state) => ({
    teacher: state.studentReducer.teacher,
  });
  export default connect(mstp)(myQuestionBank);
