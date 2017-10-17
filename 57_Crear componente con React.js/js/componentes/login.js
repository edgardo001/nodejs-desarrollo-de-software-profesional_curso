var React = require('react');
var ReactDOM = require('react-dom');

class Login extends React.Component{
  constructor(){
    super();
    this.state = {email:"",password:"", user:""}
  }

  render(){
    return(
      //JSX -- solo podra ir un div o componete padre, no se pueden retornar dos
      <div>
        <input type="text">
        <input type="password">
        <button>Login<button>
      </div>
    );
  }
}

//Nombre de la clase entre mayor y menor que.
ReactDom.render(<Login/>, document.getElementById("cont_login"));
