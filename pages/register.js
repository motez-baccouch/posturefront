import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import Axios from "axios";

const RegisterPage = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    var role="user";
   
    if(data.role==true){
      role="kine"
    }
    console.log(data);
    var haha ={
      email: data.email,
      nom: data.name,
      prenom: data.last_name,
      password: data.password,
      ableToTravel: data.ableToTravel,
      photoUrl: data.photoUrl,
      numero: parseInt(data.number),
      age: data.age,
      ville: data.ville,
      codePostal: data.codePostal,
      location: data.adresse,
      sexe: data.sexe,
      role: role};
      console.log(haha);
    const res = await Axios.post('http://localhost:3001/user', 
    {
      email: data.email,
      nom: data.name,
      prenom: data.last_name,
      password: data.password,
      ableToTravel: data.ableToTravel,
      photoUrl: data.photoUrl,
      numero: parseInt(data.number),
      age: data.age,
      ville: data.ville,
      codePostal: data.codePostal,
      location: data.location,
      sexe: data.sexe,
      role: role}
    );
    

  };
  return(
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <a><i className="icon-left"></i> Back to store</a>
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title">Create an account and discover the benefits</h2>
          <p className="form-block__description">Lorem Ipsum is simply dummy text of the printing 
          and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="email" 
                  type="text" 
                  name="email"
                  ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }

                {errors.email && errors.email.type === 'pattern' && 
                  <p className="message message--error">Please write a valid email</p>
                }
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="text" 
                  placeholder="name" 
                  name="name"
                  ref={register({ required: true })}
                />
                {errors.name && errors.name.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>

              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="text" 
                  placeholder="last name" 
                  name="last_name"
                  ref={register({ required: true })}
                />
                {errors.name && errors.name.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>

              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>

              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="comfirm Password" 
                  name="comfirmPassword"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>

              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="numeric" 
                  placeholder="number" 
                  name="number"
                  ref={register({ required: true })}
                />
                {errors.name && errors.name.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>

              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="numeric" 
                  placeholder="age" 
                  name="age"
                  ref={register({ required: true })}
                />
                {errors.name && errors.name.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>

              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="text" 
                  placeholder="ville" 
                  name="ville"
                  ref={register({ required: true })}
                />
                {errors.name && errors.name.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>

              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="text" 
                  placeholder="adresse" 
                  name="location"
                  ref={register({ required: true })}
                />
                {errors.name && errors.name.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="numeric" 
                  placeholder="code Postal" 
                  name="codePostal"
                  ref={register({ required: true })}
                />
                {errors.name && errors.name.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>
              
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="text" 
                  placeholder="photo url" 
                  name="photoUrl"
                  ref={register({ required: false })}
                />
              </div>

              

              <div className="form__input-row">
              <label for="gender">Gender:   </label>
                <select name="sexe" id="gender" ref={register({ required: true })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-Specified">Non-Specified</option>
                </select>
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="role" className={`checkbox checkbox--sm`}>
                    <input 
                      type="checkbox" 
                      name="role" 
                      id="role" 
                      ref={register({ required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>Kiné</p>
                  </label>
                </div>

              </div>
              
              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="ableToTravel" className={`checkbox checkbox--sm`}>
                    <input 
                      type="checkbox" 
                      name="ableToTravel" 
                      id="ableToTravel" 
                      ref={register({ required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>are you able to travel?</p>
                  </label>
                </div>
               
              </div>

              



              <div className="form__info">
               
              </div>

              <div className="form__btns">
                <button type="button" className="btn-social fb-btn"><i className="icon-facebook"></i>Facebook</button>
                <button type="button" className="btn-social google-btn"><img src="/images/icons/gmail.svg" alt="gmail" /> Gmail</button>
              </div>

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit no-padding-top">Register</button>

              <p className="form__signup-link">Already a member? <a href="/login">Sign up</a></p>
            </form>
        </div>

      </div>
    </section>
  </Layout>
);
              }
  
export default RegisterPage
  