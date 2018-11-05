import React, { Component } from 'react'
import MediaCard from './MediaCard'
import axiosURL from '../helpers/api'
import Loading from './Loading'
import ModalBtn from './ModalBtn'
import Modal from './Modal'

export default class StarWars extends Component {
    constructor(props) {
        super(props);

        this.state = { starwars: [], loaded: false, img: '', name: '', star: '', description: '', force: '', formError: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLoadPreview = this.handleLoadPreview.bind(this)
    }
    componentDidMount() {
        axiosURL.get('/starwars').then(response => {
            var starwar = response.data
            this.setState({ starwars: starwar, loaded: true })
        }).catch(err => {
            alert(err)
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

        axiosURL.post('/starwars', data).then(result => {
            alert("Character was inserted with success")
            window.location.reload()
        }).catch(err => {
            alert("Character wasn't inserted")
            console.log(err)
            window.location.reload()
        })

    }

    render() {
        return (
            this.state.loaded ?
                <div className="wrapper">
                    <br />
                    <div className="col-md-12 persons">
                        <ModalBtn text="New Character" id="newCharacter" />
                        <Modal id="newCharacter" title="New Character" handleSubmit={this.handleSubmit}>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8">
                                        Complete the inputs bellow! <br /><br />
                                        <input name="name" onChange={this.handleChange} value={this.state.name} type="text" className="form form-control" placeholder="Character Name" />
                                        <br />
                                        <textarea defaultValue={this.state.description} onChange={this.handleChange} name="description" className="form form-control" placeholder="Description">
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
                                        <img className="miniAvatar" alt="" id="output" />
                                    </div>
                                </div>
                            </div>
                        </Modal>
                        <br /> <br />
                        <div className="row">
                            {
                                this.state.starwars.map(data => (
                                    <MediaCard
                                        grid="3"
                                        key={data.id}
                                        src={data.img}
                                        header={data.name}
                                        title={data.force}
                                        text={data.description_min}
                                    >
                                    </MediaCard>
                                ))}
                        </div>
                    </div>
                </div> : <Loading />
        )
    }
}