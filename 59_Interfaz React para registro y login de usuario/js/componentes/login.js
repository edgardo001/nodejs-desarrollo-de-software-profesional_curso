var React = require('react');
var ReactDOM = require('react-dom');

class Login extends React.Component{
  constructor(){
    super();
    this.state = {email:"a",password:"b", username:"c"};
  }

  registrarse(){
    var u = this.state.username;
    var p = this.state.password;
    var c = this.state.email;

    var json = JSON.stringify({nombre:u, password:p, email:c});

    //post HTTP
    fetch("/users", {
      headers : { 'Content-Type':'application/json'},
      method : "POST",
      body: json,
    }).then((res)=> console.log(res))
    .catch((err)=> console.log(err));
  }

  iniciarSesion() {
      var p = this.state.password;
      var c = this.state.email;

      var json = JSON.stringify({password:p, email:c});

      //post HTTP
      fetch("/users/login", {
        headers : { 'Content-Type':'application/json'},
        method : "POST",
        body: json,
      }).then((res)=> console.log(res))
      .catch((err)=> console.log(err));
  }

  render(){
    return (
      //JSX -- solo podra ir un div o componete padre, no se pueden retornar dos
      <div>
        <div>
          <input onChange={(e)=>{
            this.setState({username:e.target.value});
          }} type='text' />
          <input onChange={(e)=>{
            this.setState({email:e.target.value});
          }} type='text' />
          <input onChange={(e)=>{
            this.setState({password:e.target.value});
          }} type='password' />
          <button onClick={this.registrarse.bind(this)}>Registrarse</button>
        </div>
        <div>
            <input onChange={(e) => {
                this.setState({email:e.target.value});
            }} type="text"/>
            <input onChange={(e) => {
                this.setState({password:e.target.value});
            }} type="password"/>
            <button onClick={this.iniciarSesion.bind(this)}>iniciar sesión</button>
        </div>
      </div>
    );
  }
}

//Nombre de la clase entre mayor y menor que.
ReactDOM.render(<Login/>, document.getElementById("cont_login"));

/*
https://github.com/facebook/react
https://reactjs.org/docs/hello-world.html
https://babeljs.io/
https://babeljs.io/docs/plugins/transform-react-jsx/
https://babeljs.io/docs/plugins/preset-react/

Se desconoce el motivo del funcionamiento de "babel js/ --presets react --out-dir build",
pero como indica el curso, el comando "babel --preset react js/ --out-dir build" no funciona correctamente, aunque el curso esta hecho con react 15
y actualmente se encuentra en react 16

*/
