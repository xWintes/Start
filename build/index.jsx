function Names() {
    const names = ['Kevin', 'Oscar', 'Pam']
    const namesList = names.map(name => <li>{name}</li> )
    const showNames = true

    return (
     <div>
          {showNames ? <ul>{namesList}</ul>: 'Brak imion'}
    </div>
    )
}


function Headline() {
    const title = 'ReactJS'
    const showNames = true


    return (
    <div>
    <h1>Hello {title}</h1>
    <Names />
    </div>
    )
  }

  const container = document.getElementById('app');
  const app = ReactDOM.createRoot(container);
  app.render(<Headline />);