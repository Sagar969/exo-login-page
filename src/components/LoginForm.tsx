import petals from '../assets/icons/petals.svg'
import Form from './Form'

const LoginForm = () => {
  return (
    <div className="LoginForm-wrapper absolute right-0 top-[27px] h-[calc(100%-52px)] w-[50%] flex flex-col justify-center items-center font-inter tab:relative tab:w-full">
      
      <img src={petals} alt="" className="petals" />

      <h2 className='text-[34px] text-blackBg font-poppins'>Welcome <span className='text-petalGreen'>Back!</span></h2>

      <p className='text-[14px] '>Glad to see you, Again!</p>

      <Form />

      <p className='text-[14px] text-lighterGray'>Don't have an account yet? <a href="#" className='text-petalGreen'>Sign Up</a></p>

    </div>
  )
}

export default LoginForm