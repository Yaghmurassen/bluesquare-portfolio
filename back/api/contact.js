import React, { Component, Fragment } from 'react';
import axios from 'axios';
// import config from '../config'

export default class contact extends Component {
    newContact = (form_data, res, rej) => {
        axios.post(config.getServe() + '/contact', form_data)
            .then(response => res(response.data))
            .catch(reject => rej(reject))
    }
}
