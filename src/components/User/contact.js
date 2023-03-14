import React from 'react'

function Contact(props){
    return(
        <div id='contactInformation'>
            <div class='address'>
                <h4 class='labelAddress'>Address</h4>
                <h5 class='valueAddress'>{props.address}</h5>
            </div>
            <div class='phoneNumber'>
                <h4 class='labelPhoneNumber'>Phone Number</h4>
                <h5 class='valuePhoneNumber'>{props.phoneNumber}</h5>
            </div>
            <div class='emailAddress'>
                <h4 class='labelEmailAddress'>Email Address</h4>
                <h5 class='valueEmailAddress'>{props.emailAddress}</h5>
            </div>
        </div>
    )
}
export default Contact;