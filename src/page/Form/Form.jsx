import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


export function Form({informSubmit}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('junior');
    const [licence, setLicence] = useState(false)

    const onInputChange = (event) => {
        const type = event.target.type;
        const value = event.target.value;

        switch (type) {
            case "text":
                setName(value)
                break;
            
            case "email":
                setEmail(value)
                break;
        
            default:
                break;
        }
    }

    const onLicenceChange = () => {
        setLicence(!licence);
    }

    const onRadioBtnChange = (e) => {
        setExperience(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (name==='' || email === '') {
           return alert('write form') 
        }
        const obj = { name, email, experience };
        informSubmit(obj)
        setName('');
        setEmail('');
    }

  return <>
    <form onSubmit={onSubmitForm}>
        <label > Name
            <input type="text" value={name} onChange={onInputChange }/>
        </label>
        <label > Email
            <input type="email" value={email} onChange={onInputChange}/>
        </label>
        <p>Ваш уровень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={onRadioBtnChange}
            checked={experience === 'junior'}
          />
          Junior
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={onRadioBtnChange}
            checked={experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={onRadioBtnChange}
            checked={experience === 'senior'}
          />
          Senior
        </label>
                <label>
          <input
            type="checkbox"
            name="licence"
            checked={licence}
            onChange={onLicenceChange}
          />
          Согласен с условием
        </label>
        <button type="submit" disabled={!licence}>Submit</button>
    </form>
    <Link to='/form/formik'>Formik</Link>
    <Outlet/>
    </>
}