import React, {Component} from 'react';
import axios from 'axios';
import './body.css';

export default class Body extends Component {
    constructor(){
        super()
        this.state = {
            inputTxt:'',
            arr:[],
            park:{}
        }
        this.getParks=this.getParks.bind(this)
        this.getParks=this.getParks.bind(this)
        this.getParks=this.getParks.bind(this)
    }

    getApi(){
        axios.get('https://developer.nps.gov/api/v1/parks?api_key=27lSNGluQg5L2lKOwNLXUexSJp8T8t1BEbqoirPG')
        .then((res)=>console.log(res.data.data.map(park => park.parkCode)))
    }

    getApiQuery(){
        axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${this.state.inputTxt}&api_key=27lSNGluQg5L2lKOwNLXUexSJp8T8t1BEbqoirPG`)
        .then((res=>this.setState({park:res.data.data[0]})))
    }

    handleChange(e) {
        var inputTxt = e.target.value
        this.setState({inputTxt})
        .then(response => console.log(res.data))
    }
    addPark(){
        let {park} = this.state
        axios.post('https://localhost:3002/api/addPark'), {}
    }
    render (){
        return (
            <div className='body'>
                <button onClick={()=>this.getApi()}>For Don</button>
                <input onChange={(e)=> this.handleChange(e)} />
                <button onClick={()=> this.getApiQuery()}>Search Park></button>
                {JSON.stringify(this.state.arr, null, 4)}
                <div>
                    <button onClick={this.addPark}></button>
                </div>
            </div>
        )

    }
}