import React from 'react'

function AddInfo(props){
    return(
        <div id='Credentials'>
            <div>
            <h4 class='labelResume'>Resume</h4>
            <h5 class='valueResume'>{props.resume}</h5>
            </div>
            <div>
            <h4 class='labelReferences'>References</h4>
            <h5 class='valueReferences'>{props.references}</h5>
            </div>
            <div>
            <h4 class='labelCertificates'>Certificates</h4>
            <h5 class='valueCertificates'>{props.certificates}</h5>
            </div>
        </div>
    )
}
export default AddInfo;