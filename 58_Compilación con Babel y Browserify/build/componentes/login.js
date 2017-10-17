var React = require('react');
var ReactDOM = require('react-dom');

class Login extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "", user: "" };
  }

  render() {
    return (
      //JSX -- solo podra ir un div o componete padre, no se pueden retornar dos
      React.createElement(
        'div',
        null,
        React.createElement('input', { type: 'text' }),
        React.createElement('input', { type: 'password' }),
        React.createElement(
          'button',
          null,
          'Login'
        )
      )
    );
  }
}

//Nombre de la clase entre mayor y menor que.
ReactDOM.render(React.createElement(Login, null), document.getElementById("cont_login"));

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