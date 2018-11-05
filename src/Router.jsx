import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StarWars from './components/StarWars'
import StarWar from './components/StarWar'
import Planets from './components/Planets'
import Home from './components/Home'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/starwars' component={StarWars}></Route>
            <Route exact path='/starwar/:starname' component={StarWar}></Route>
            <Route exact path='/starwar/search/:starname' component={StarWar}></Route>
            <Route exact path='/planets/' component={Planets}></Route>
        </Switch>
    </BrowserRouter>
)

export default Router