import React, { Component } from 'react'
import axios from 'axios';

export class Registro extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:'',
            year:'',
    
            
        }

    }

    onSubmitForm = (e) => {
        e.preventDefault();
        axios.post('https://greenlifemx.herokuapp.com/users/create',this.state)
        .then(res => alert('User añadido'))
        .catch(error => console.log(error))
    }

    onInputChange = (e) =>{
        const {id,value} = e.target;
        this.setState({
            [id]:value
        })
    }

    render() {
        return (
            <div>
                <form className="p-5" onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Nombre</label>
                        <input type="text" className="form-control" id="name"
                            onChange={this.onInputChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Correo electrónico</label>
                        <input type="text" class="form-control" id="email"
                        onChange={this.onInputChange}
                        value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Año de nacimiento</label>
                        <input type="number" class="form-control" id="year"
                        onChange={this.onInputChange}
                        value={this.state.year}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Contraseña</label>
                        <input type="text" class="form-control" id="password"
                        onChange={this.onInputChange}
                        value={this.state.password}
                        />
                    </div>
                
                    <button className="btn btn-success" type="submit">Registrarme</button>
                </form>
            </div>
        )
    }
}

export default Registro