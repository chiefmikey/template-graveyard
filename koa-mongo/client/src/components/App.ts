const App = () => {
  const appElement = document.querySelector('.app');
  const date = String(new Date());
  if (appElement) {
    appElement.innerHTML = `Serving: Static Files ${date}`;
  }
};

export default App;
