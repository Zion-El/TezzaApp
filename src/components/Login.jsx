import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BG from '../assets/BG.png'
import Logo from '../assets/new.png'

const Login = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

      const [errors, setErrors] = useState({});
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };


      const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
            toast.success('Login successful');
            navigate('/dashboard')
        }
        }


      const validateFormData = (data) => {
        const errors = {};
        if (!data.email) {
            errors.email = 'Please enter your email';
          } 

        if (!data.password) {
          errors.password = 'Please enter your password';
        } else if (data.password.length < 8) {
          errors.password = 'Password must be at least 8 characters long';
        }
        return errors;
      };

  return (
    <section className='bg-white relative w-full flex justify-center items-center h-[100vh]'>
        {/* background shape */}
        <div className='absolute top-0 w-full h-[60%] z-0'>
            <img className='w-full h-full' src={BG} alt="background" />
        </div>

        <div className='w-[85%] md:w-[70%] lg:w-[40%] z-10 bg-white shadow-md px-4 rounded-md py-6 md:p-12 space-y-10 relative'>
            <div>
                <h2 className='font-[600] text-sm text-shadow '>Login</h2>
                <p className='font-500 text-sm text-shadow'>Login into your account.</p>
            </div>
            <img className='absolute top-0 right-4 h-[50px] w-[50px]' src={Logo} alt="logo" />
            <form className='space-y-8' method='post' onSubmit={handleSubmit}>
                <div className='space-y-6'>
                                
                    <div className='space-y-3'>
                        <h2 className='font-500 text-sm text-shadow'>Email</h2>
                        <input className='p-3 w-full placeholder:text-lighter placeholder:text-sm border-[#969BA0] border-2 outline-none text-sm ' type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email"  required/>
                            {errors.email && (<small className="text-[#ff0000]">{errors.email}</small> )}
                    </div>


                    <div className='space-y-3'>
                        <h2 className='font-500 text-sm text-shadow text'>Password</h2>
                        <input className='p-3 w-full placeholder:text-lighter placeholder:text-sm border-[#969BA0] border-2 outline-none text-sm ' type="Password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter password" required/>
                        {errors.password && (<small className="text-[#ff0000]">{errors.password}</small> )}
                    </div>
                </div>

                        {/* <input type="submit"  /> */}
                        <button className='bg-[#DDAA33] w-full font-500 text-center text-sm shadow-sm  py-3 text-[#fff]' type='submit' onClick={handleSubmit} >
                            Login
                            {/* { loading? <div> Loading ... <Spinner height='20px' width="20px"/></div> : 'Submit' } */}
                        </button>

                                                
                                

            </form>
        </div>

    </section>
  )
}

export default Login
