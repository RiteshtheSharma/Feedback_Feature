import { useSelector } from 'react-redux';
import Form from './Form';
import SpeedDialComp from './SpeedDialComp';
import {  useState } from "react";
const FABAndFormComp = ({actions}) => {
    
    const SelectedItemName = useSelector(
        (state) => state.speedDial.selectedItemName
      ); 
      const [formWidth, setformWidth] = useState(0)
  return (
    <> {SelectedItemName !== undefined && (
        <Form
        setformWidth={setformWidth}
          MainHead={
            actions.find((obj) => obj.name === SelectedItemName).formHead
          }
          MainElem={
            actions.find((obj) => obj.name === SelectedItemName).formElem
          }
        />
      )}

      <SpeedDialComp actions={actions} liftOnMobileDisplay= {formWidth}/></>
   
  )
}

export default FABAndFormComp