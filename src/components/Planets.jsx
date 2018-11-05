import React, { Component } from 'react'
import axiosURL from '../helpers/api'
import MediaCard from './MediaCard'

export default class Planets extends Component {

    constructor(props) {
        super(props)
        this.state = {
            planets: []
        }
    }

    componentDidMount() {
        axiosURL.get('https://swapi.co/api/planets/?format=json&page=1').then(planets => {
            this.setState({ planets: planets.data.results })
        }).catch(err => {
            alert(err)
        })
    }

    catchImage(planet) {
        switch (planet) {

        }
    }
    render() {
        return (
            <div className="wrapper">
                <div className="col-md-12 persons"> <br />
                    <div className="row">
                        {
                            this.state.planets.map(planet => (
                                <MediaCard
                                    key={planet.name}
                                    src={`http://localhost:3977/starwars/img/planets/${planet.name}.jpg`}
                                    grid="3"
                                    title={planet.terrain}
                                    header={planet.name}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}