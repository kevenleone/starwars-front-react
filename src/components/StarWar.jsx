import React, { Component } from 'react'
import axiosURL from '../helpers/api'
import MediaCard from './MediaCard'
import Loading from './Loading'
import ModalBtn from './ModalBtn'
import Modal from './Modal'

export default class StarWar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            starwar: [],
            notExist: false,
            starname: '',
            loaded: false,
            description: '',
            name: '',
            force: '',
            star: '',
            img: '',
            id: '',
            formError: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleLoadPreview = this.handleLoadPreview.bind(this)
        this.handleModalPress = this.handleModalPress.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        var starname = this.props.match.params.starname
        this.setState({ starname })
        axiosURL.get(`/starwars/${starname}`).then(starwar => {
            this.setState({ starwar: starwar.data, loaded: true })
        }).catch(err => {
            this.setState({ notExist: true, loaded: true })
        })
    }

    handleChange(e) {
        var target = e.target.name
        var value = e.target.value
        this.setState({
            [target]: value
        })
    }

    handleLoadPreview(e) {
        var output = document.getElementById('output')
        var file = e.target.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (e) => {
            console.log(e.target.result)
            this.setState({ img: e.target.result })
        }
        output.src = URL.createObjectURL(file)
    }

    handleRemove(character) {
        if (window.confirm(`Are you sure you want to remove ${character.name} ?`)) {
            axiosURL.delete(`/starwars/${character.id}`).then(data => {
                alert(`${character.name} was successfully removed !`)
                window.location.href = '../starwars'
            }).catch(err => {
                alert(`Wasn't possible remove ${character.name}... try again later`)
            })
        }
    }

    handleModalPress(character) {
        console.log(character)
        this.setState(
            {
                description: character.description,
                name: character.name,
                star: character.star,
                img: character.img,
                force: character.force,
                id: character.id,
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault()

        if (this.state.description === '' || this.state.star === '' || this.state.name === '') {
            this.setState({ formError: true })
            return;
        }

        var data = {
            description: this.state.description,
            star: this.state.star,
            name: this.state.name,
            force: this.state.force,
            img: this.state.img
        }

        axiosURL.put(`/starwars/${this.state.id}`, data).then(result => {
            alert("Character was updated with success")
            window.location.href = this.state.name
        }).catch(err => {
            alert("Character wasn't updated")
            console.log(err)
            window.location.reload()
        })
    }

    showStars = (starCount) => {
        let stars = []
        for (let i = 0; i < starCount; i++) {
            stars.push(
                <i key={i} className="fa fa-star-o"></i>
            )
        }
        return stars
    }

    render() {
        return (
            this.state.loaded ?
                <div className="wrapper">
                    <br />
                    <a className="btn btn-primary pull-right" href="/starwars">  Go Back</a>
                    <br />
                    {
                        !this.state.notExist ?
                            <div className="col-md-12 persons">
                                <Modal id="updateCharacter" title="Update Character" handleSubmit={this.handleSubmit}>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-8">
                                                Complete the inputs bellow! <br /><br />
                                                <input name="name" onChange={this.handleChange} value={this.state.name} type="text" className="form form-control" placeholder="Character Name" />
                                                <br />
                                                <textarea 
                                                value={this.state.description} 
                                                onChange={this.handleChange} 
                                                name="description" 
                                                className="form form-control" 
                                                placeholder="Description"
                                                rows='4'
                                                >

                                                </textarea>
                                                <br />
                                                <select value={this.state.force} onChange={this.handleChange} className="form form-control">
                                                    <option value=''>Select the force</option>
                                                    <option value='Dark'>Dark</option>
                                                    <option value="Light">Light</option>
                                                </select>
                                                <br />
                                                <input onChange={this.handleChange} value={this.state.star} type="number" name="star" className="form form-control" placeholder="Star" />
                                                <br />
                                                Input the image file <br />
                                                <input onChange={this.handleLoadPreview} type="file" name="img" />
                                                <br />
                                                {
                                                    this.state.formError ?
                                                        <b style={{ color: 'red' }}>Fill in all the items above</b> : ''
                                                }
                                            </div>
                                            <div className="col-md-4">

                                                <b>Image Preview</b>
                                                <br /><br />
                                                <img src={this.state.img} className="miniAvatar" alt="" id="output" />

                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                                {this.state.starwar.map(info => (
                                    <div key={info.id} className="row">
                                        <MediaCard
                                            header={info.name}
                                            src={info.img}
                                            readmore="false"
                                        />
                                        <div className="col-md-9">
                                            <h4 className="card-header">Character Description</h4>
                                            <div className="card-body">
                                                <p align="justify" className="card-text">{info.description}</p>
                                                <p>Force: <span className="badge badge-primary">{info.force}</span></p>
                                                <p>Stars: {this.showStars(info.star)}
                                                </p>
                                            </div>

                                            <div className="col-md-6">
                                                <ModalBtn onClick={() => { this.handleModalPress(info) }} text="Update Character" id="updateCharacter" />
                                                &ensp;
                                            <button onClick={() => { this.handleRemove(info) }} className="btn btn-danger">Delete</button>
                                                <br />
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            : `O personamento ${this.state.starname} não existe`
                    }
                </div> : <Loading />
        )
    }
}