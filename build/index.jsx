// Funkcja Names
function Names() {
    
    const [showNamesSate, setShowNameState] = React.useState('true')
    const names = ['Kevin', 'Oscar', 'Pam']
    const namesList = names.map(name => <li key={name}>{name}</li> )
    const toggleNames = () => setShowNameState(!showNamesSate)
    

    return (
     <div>
          {showNamesSate ? <ul>{namesList}</ul> : 'Brak imion'}
    <button onClick={toggleNames}>Hide names</button>

    </div>
    )
}

// Funkcja Headline
function Headline() {


    let title = 'ReactJS'
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