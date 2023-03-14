import React from 'react'
import AddInfo from './addInfo'
import Contact from './contact'
import InfoBox from './infoBox'
import './ProfileNanny.css'

class Nanny extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authUser: null,
            profile: {}
        }
    }

    componentDidUpdate() {
        fetch('http://localhost:3000/nannies/')
            .then((response) => response.json())
            .then((nannies) => {
                nannies.forEach(element => {
                    if (element.email === document.getElementById('userEmail').innerHTML) {
                        this.setState({
                            authUser: document.getElementById('userEmail').innerHTML,
                            profile: element
                        });
                    }
                });
            })
    }

    shouldComponentUpdate(nextProps) {
        if(this.state.authUser !== 'undefined' && this.state.authUser !== null) return false; 
        return true;  //otherwise always return true (this is default)
      }

    render() {
        return (
            <div class='Nanny'>
                <div>
                    <img src=''></img>
                    <h2 class='profileName'>{this.state.profile.full_name}</h2>
                </div>
                <div>
                    <h2>{this.state.profile.testimonials}</h2>
                </div>
                <InfoBox hourlyRate={this.state.profile.hourly_rate} specialities={this.state.profile.specialities} />
                <AddInfo resume={this.state.profile.resume} references={this.state.profile.references} certificates={this.state.profile.certificates} />
                <Contact address={this.state.profile.home_address} phoneNumber={this.state.profile.phone_number} emailAddress={this.state.profile.email} />
            </div>
        )
    }
}
export default Nanny;