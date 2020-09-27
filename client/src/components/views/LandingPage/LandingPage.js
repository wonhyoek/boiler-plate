import React, {useEffect} from 'react';
import axios from "axios";

export default () => {

    useEffect(() => {
        axios.get('/hello')
        .then(response => console.log(response))
    }, [])

    return (
        <div>
            LandingPage
        </div>
    )
}
