import React from "react";
import useTheme from "../context/theme";


export const Theme = ()=>{
    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeButton = (e)=>{
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkTheme()
        }else{
            lightTheme()
        };
    };
    
    return(
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
            value="" onChange={onChangeButton} checked={themeMode ==='dark'} />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Change Theme</label>
        </div>
    )
}