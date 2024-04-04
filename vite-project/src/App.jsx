const LoginStatusButton = (status) => {
  if(status){
    return <button>Logout</button>
  } else {
    return <button>Login</button>
  }
}

const App = () => {

    return (
      <div>
        <h1>Login Status</h1>
        {LoginStatusButton(false)}
      </div>
    );  
  
};

export default App;