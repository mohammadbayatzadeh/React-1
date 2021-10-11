import React, { Component } from 'react';

import Banner from './banner'
import Cards from './cards'
import Search from './search';
import Support from "./support";

class Landing extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Cards />
                <Search />
                <Support />
            </div>
        );
    }
}

export default Landing;