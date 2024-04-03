
const App = () => {

  const city = ["Dhaka", "USA", "Delhi", "CTG"]

  return (
    <div>
      <ul>
        {
          city.map((item, i) => {
            return <li key={i.toString()}>{item}</li>
          })
        }
      </ul>
    </div>
  );
};

export default App;