import React from 'react';
import axios from 'axios';

export class Details extends React.Component{


    constructor(){
        super()
        this.state ={
            movies: []
        }
    }
    
    componentDidMount(){
        console.log("Soy componentDidMount")
    }
    componentWillMount(){
        const url = 'https://vero-movie-api.herokuapp.com/movies/read';
        axios.get(url)
        .then( (res) =>{
            this.setState({movies: res.data});
            //this.setState = res.data;
            console.log(this.state.movies[0].title);
        }) 
        .catch((error) =>{
            
        })
        console.log("Soy componentWillMount")
    }
    componentWillUnmount(){
        console.log("Soy componentWillUnmount")
    }
    render(){
        return(
            <div>
                {this.state.movies.map(function(obj){
                    console.log(obj.title);
                })}
            </div>
        )
        
    }
}