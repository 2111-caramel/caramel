import React from 'react'
import {connect} from 'react-redux'
import { Map, GoogleApiWrapper, Wrapper } from "@googlemaps/react-wrapper";
import secretKeys from "../../script/apikey";

const map_key = secretKeys.SECRET_MAPS_KEY;

class SingleMap extends React.Component {

    render(){
        console.log("key", map_key)
        return(
            <div>
                <Map 
                    google = {this.props.google}
                    style = {{width: "100%", height: "100%"}}
                    zoom = {10}
                    initialCenter = {{
                        lat: 28.7,
                        lng: 77.1
                    }
                }
                />
            </div>
        )
}
}
export default GoogleApiWrapper({
    apiKey: map_key
    })(SingleMap);