import React, { Component } from 'react'

export default class Topbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: '',
            selectedTab: ''
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChangeTab = this.handleChangeTab.bind(this)
    }

    componentDidMount(){
        console.log(this.state.selectedTab)
    }

    handleChangeTab(tab){
        this.setState({selectedTab: tab})
        console.log(`Selected... ${this.state.selectedTab}`)
    }

    handleInput(e) {
        this.setState({ inputText: e.target.value })
    }

    handleSearch() {
        if (this.state.inputText === '') {
            alert('Type something before search');
            return;
        }
        window.location = `/starwar/search/${this.state.inputText}`
    }

    render() {
        return (
            <div className="bs-docs-section clearfix">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                                <a className="navbar-brand" href="/">Star Wars</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarColor01">
                                    <ul className="navbar-nav mr-auto">
                                        <li className='nav-item'>
                                            <a 
                                            className="nav-link" href="/">Home</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link" href="/starwars">Characters</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link" href="/planets">Planets</a>
                                        </li>
                                    </ul>
                                    <div className="form-inline my-2 my-lg-0">
                                        <input onChange={this.handleInput} className="form-control mr-sm-2" type="text" placeholder="Search Character" value={this.state.inputText} />
                                        <button onClick={this.handleSearch} className="btn btn-secondary my-2 my-sm-0">Search</button>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
