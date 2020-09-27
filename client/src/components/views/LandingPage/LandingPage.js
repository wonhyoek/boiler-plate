import React, {useEffect} from 'react';
import axios from "axios";
import { useDataLayerValue } from '../../../Context/DataLayer';

export default () => {

    const [{user}, dispatch] = useDataLayerValue();

    useEffect(() => {
       dispatch({
           type: "SET_USER",
           user: "wonhyoek"
       })
    }, [])

    return (
        <div>
            LandingPage
        </div>
    )
}
