import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Signup = () => {

   const {createUser}=useContext(AuthContext);

    const handlesignup=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content md:mt-20 flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
  
            <img className='hidden md:block w-full' src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-8044864-6430773.png?f=webp" alt=""  />
          </div>
          <div className="card md:pt-3 md:p-5 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className='font-bold text-3xl text-center mt-3'>Sign Up</h2>
            <form onSubmit={handlesignup} className="card-body" >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type='submit' value='login'></input>
              </div>
            </form>
            <div className='text-center mb-3'>
              <p>Already have an account? <Link className='font-bold text-blue-600' to='/login'>Log in</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;