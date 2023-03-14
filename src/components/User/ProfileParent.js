import React from 'react'
import Contact from './contact'

class Parents extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            authUser: null,
            profile: {}
        }
    }

    componentDidUpdate() {
        fetch('http://localhost:3000/parents/')
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

    render(){
        return(
           <div class='Parents'>
                <div>
                    <h2 class='fullName'>{this.state.profile.full_name}</h2>
                </div>
               <div>
                    <Contact address={this.state.profile.address} phoneNumber={this.state.profile.contact} emailAddress={this.state.profile.email}/>
                </div>
           </div> 
        )
        }
}
export default Parents;