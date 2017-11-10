var React = require('react');
var ReactDOM = require('react-dom');

class Login extends React.Component {
  constructor() {
    super();
    this.state = { email: "a", password: "b", username: "c" };
  }

  registrarse() {
    var u = this.state.username;
    var p = this.state.password;
    var c = this.state.email;

    var json = JSON.stringify({ nombre: u, password: p, email: c });

    //post HTTP
    fetch("/users", {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: json
    }).then(res => console.log(res)).catch(err => console.log(err));
  }

  iniciarSesion() {
    var p = this.state.password;
    var c = this.state.email;

    var json = JSON.stringify({ password: p, email: c });

    //post HTTP
    fetch("/users/login", {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: json
    }).then(res => console.log(res)).catch(err => console.log(err));
  }

  render() {
    return (
      //JSX -- solo podra ir un div o componete padre, no se pueden retornar dos
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement('input', { onChange: e => {
              this.setState({ username: e.target.value });
            }, type: 'text' }),
          React.createElement('input', { onChange: e => {
              this.setState({ email: e.target.value });
            }, type: 'text' }),
          React.createElement('input', { onChange: e => {
              this.setState({ password: e.target.value });
            }, type: 'password' }),
          React.createElement(
            'button',
            { onClick: this.registrarse.bind(this) },
            'Registrarse'
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement('input', { onChange: e => {
              this.setState({ email: e.target.value });
            }, type: 'text' }),
          React.createElement('input', { onChange: e => {
              this.setState({ password: e.target.value });
            }, type: 'password' }),
          React.createElement(
            'button',
            { onClick: this.iniciarSesion.bind(this) },
            'iniciar sesi\xF3n'
          )
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

var obj = {
  nombre: "abc",
  edad: 123,
  localidad: "abc"
};

function actualizar() {
  obj.nombre = Math.random().toString(36).substring(5);
  obj.edad = Math.random();
  obj.localidad = Math.random().toString(36).substring(5);
  ReactDOM.render(React.createElement(Data, obj), document.getElementById("cont_login_1"));
}

// clase
class Data extends React.Component {
  constructor(props) {
    super(props);
  }

  // ejecuta cuando el componente se monta en el Dom
  componentDidMount() {
    setInterval(function () {
      // procesos para recargar info
      actualizar();
    }, 1000);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        this.props.nombre
      ),
      React.createElement(
        'p',
        null,
        this.props.edad
      ),
      React.createElement(
        'p',
        null,
        this.props.localidad
      )
    );
  }
}

ReactDOM.render(React.createElement(Data, obj), document.getElementById("cont_login_1"));
//ReactDOM.render(<Login/>, document.getElementById("cont_login"));