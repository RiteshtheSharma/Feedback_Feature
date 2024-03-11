import { useSelector } from 'react-redux';
import Form from './Form';
import SpeedDialComp from './SpeedDialComp';
import {  useState } from "react";
const FABAndFormComp = ({actions}) => {
    
    const speedDialSelectedItem = useSelector(
        (state) => state.speedDial.selectedItemName
      ); 
      const [formWidth, setformWidth] = useState(0)
  return (
    <> {speedDialSelectedItem !== undefined && (
        <Form
        setformWidth={setformWidth}
          MainHead={
            actions.find((obj) => obj.name === speedDialSelectedItem).formHead
          }
          MainElem={
            actions.find((obj) => obj.name === speedDialSelectedItem).formElem
          }
        />
      )}

      <SpeedDialComp actions={actions} liftOnMobileDisplay= {formWidth}/></>
   
  )
}

export default FABAndFormComp