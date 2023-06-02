import Carousel from './components/CarouselWrapper';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <>
      <section className="login-page w-screen h-screen overflow-hidden tab:overflow-y-scroll font-poppins tab:px-5 tab:py-[27px]">
        <LoginForm />
        <Carousel />
      </section>
    </>
  );
}

export default App;
