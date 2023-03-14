import React from 'react'

function InfoBox(props){
    return(
        <div id='infoBox'>
            <div class='HourlyRate'>
                <h2 class='labelHourlyRate'>Hourly Rate</h2>
                <h3 class='valueHourlyRate'>{props.hourlyRate}</h3>
            </div>
            <div class='Specialities'>
                <h2 class='labelSpecialities'>Specialities</h2>
                <h3 class='valueSpecialities'>{props.specialities}</h3>  
            </div> 
        </div>
    )
}
export default InfoBox;