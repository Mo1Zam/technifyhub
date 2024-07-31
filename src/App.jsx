import PrimaryButton from "./components/PrimaryButton";
import SecondryButton from "./components/SecondryButton";
function App() {
  return (
    <>
      <div>
        <div className="z-10 m-auto  w-full block p-3  md:w-[416px] md:pt-20 ">
          <img src="src/assets/logo.svg" alt="Error-404" />
        </div>
        <div className="uppercase flex flex-col text-xl px-2 pt-5 md:text-center ">
          <h1 className="font-extrabold text-4xl sm:text-7xl">
            Your Quote Goes Here
          </h1>
          <div className="tracking-widest my-4">
            <h2>Your Line</h2>
            <h2>That Goes Here</h2>
          </div>
          <div className="flex flex-col uppercase  justify-center gap-2 sm:flex-row sm:gap-4 ">
            <PrimaryButton name="join now!" className="" />
            <SecondryButton name="explore" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App