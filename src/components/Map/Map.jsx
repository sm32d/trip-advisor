import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

import useStyles from './styles'

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyD-9tSrke72PouQMnMX-a7eZk-c2zrq6i0'}} // use your own API key
                defaultCenter={{lat: -34.397, lng: 150.644}}
                center={{lat: -34.397, lng: 150.644}}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;