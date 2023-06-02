import { FormEventHandler, MouseEventHandler, useRef, useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const Form = () => {
  const [email, setEmail] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [showPass, setShowPass] = useState<boolean>(false)
  const passRef = useRef<HTMLInputElement>(null)

  const togglePassVisibility: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setShowPass((prev) => !prev);
  };

  // To show error on failing validation
  const showError = (el: HTMLInputElement, msg: string) => {
    el.placeholder = msg;
    el.classList.remove('border-lightGray');
    el.classList.add('border-red-900', 'border-2');
    setTimeout(() => {
      el.classList.remove('border-red-900', 'border-2');
      el.classList.add('border-lightGray');
    }, 2000);
  };

  // To validate Password
  const validatePass = () => {
    if(pass.length >= 8) return true;
    setPass('');
    if (!passRef.current) return false;
    showError(passRef.current, 'Password must be at least 8 characters long');
    return false;
  }

  // On Submit
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if(validatePass()) {
      //login
    }
  }

  return (
    <form className="flex flex-col w-[50%] mb-24 mt-10 tab:w-[80%]" onSubmit={handleSubmit}>
      <input
        type="email"
        name="usermail"
        id="usermail"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value.trimStart())}
        className="border border-lightGray rounded-[10px] outline-petalGreen opacity-[45%] w-[100%] px-5 py-2 text-petalGreen focus:opacity-100 mb-5"
      />

      <label className="w-[100%] relative">
        <input
          type={showPass ? 'text' : 'password'}
          ref={passRef}
          name="userpass"
          id="userpass"
          placeholder="Enter your password"
          required
          value={pass}
          onChange={(e) => setPass(e.target.value.trim())}
          className="border border-lightGray rounded-[10px] outline-petalGreen opacity-[45%] w-[100%] px-5 py-2 text-petalGreen focus:opacity-100 transition-all duration-200"
        />

        <button
          className="text-lightGray opacity-[45%] absolute right-5 top-[50%] translate-y-[-50%] hover:text-petalGreen" onClick={togglePassVisibility}
        >
          {showPass ? <VscEye /> : <VscEyeClosed />}
        </button>
      </label>

      <a
        href="#"
        className="text-[12px] text-lighterGray opacity-50 hover:opacity-100 hover:text-petalGreen transition-all duration-200 w-[100%] text-right mb-8 "
      >
        Forgot Password?
      </a>

      <button
        className="w-[100%] bg-blackBg text-white px-5 py-2 border border-lightGray rounded-[10px] text-[18px] shadow-lg transition-all duration-200 shadow-blackBg hover:bg-petalGreen hover:border-petalGreen hover:shadow-petalGreen"
        type='submit'
      >
        Log In
      </button>
    </form>
  );
};

export default Form;
