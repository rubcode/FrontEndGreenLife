import React from 'react';
import axios from 'axios';
    

// export function Registro(props){
console.log(props);

const addUser=(props)=>{
        
    axios.create(`https://greenlifemx.herokuapp.com/users/create`)
    .then(res =>{ 
        console.log(res)
    })
}

    return (

        <main>
<div id="pnlregistro" class="container pink-text text-darken-2">
    <form>
        <div class="row">
            <div class="input-field col s12 center">
                <h5 class="pink-text text-darken-2">¡Regístrate!</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col l12 m12 s12">
                <input id="txtnombre" type="text" class="validate" name="txtnombre" placeholder="Nombre">{props.name}</input>
                <label for="nombre">Name</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col l6 m6 s12">
                <input id="txtedad" type="text" class="validate" name="txtedad" placeholder="Edad" maxlength="10">{props.edad}</input>
                <label for="telefono">Edad</label>
            </div>
            <div class="input-field col l6 m6 s12">
                <input id="email" type="email" class="validate" name="email" placeholder="Email">{props.email}</input>
                <label for="email">Email</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col l6 m6 s12">
                <input id="contrasena" type="password" class="validate" name="contrasena" placeholder="Contraseña">{props.password}</input>
                <label for="contrasena">Contraseña</label>
            </div>
            <div class="input-field col l6 m6 s12">
                <input id="repetir" type="password" class="validate" name="repetir" placeholder="Repetir Contraseña">{props.password}</input>
                <label for="repetir">Repetir Contraseña</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12 center">
                <button id ="registrate" class="btn waves-effect waves-light btnrounded" type="button" name="registra" onClick={()=>addUser(props)}>Ingresar
                <i class="material-icons right">send</i>
                </button>
            </div>
        </div>
    </form>				
</div>
</main>
  
    
)
    }

// export default Registro;




   


