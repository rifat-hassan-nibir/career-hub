function App() {
  return (
    <>
      <h1 className="text-3xl">this is career hub</h1>
      <input
        type="checkbox"
        value="dark"
        className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
      />
    </>
  );
}

export default App;
