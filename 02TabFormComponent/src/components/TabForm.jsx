import { useState } from "react";
import Profile from "./Profile";
import Settings from "./Settings";
import Interests from "./Interests";

const TabForm = () =>{
    const [active,setActive] = useState(0)
    const [errors, setErrors] = useState({})
    const tabs = [
        {
            name: "Profile",
            component: Profile,
            validate : () =>{
                const err = {};
                if(!data.name || data.name.length<3){
                    err.name = 'Name is not valid'
                }
                if(!data.age || data.age<18){
                    err.age = 'Age is not valid'
                }
                if(!data.email || data.email.length<3){
                    err.email = 'Email is not valid'
                }
                setErrors(err);
                return err.name || err.email || err.age ? false : true;
            }
        },
        {
            name: "Settings",
            component: Settings,
            validate: ()=>{
                return true;
            }
        },
        {
            name: "Interests",
            component: Interests,
            validate: ()=>{
                const err = {};
                if(data.interests.length<1){
                    err.interests = 'Select atleast 1 Interest'
                }
                setErrors(err);
                return err.length >0 ? false : true;
            }
        }
    ]
    const [data, setData] = useState({
        name: 'Praful',
        age: '12',
        email: 'guptapraful130@gmail.com',
        interests: ['chess','volleyball','gaming'],
        theme: 'dark'
    })
    const ActiveTabComponent = tabs[active].component;
    const handleTabChange = (t) => {
        setActive(t);
    }

    const goToPrevTab = ()=>{
        if(tabs[active].validate()){
            setActive(prev=> prev-1);
        }
    }
    const goToNextTab = ()=>{
        if(tabs[active].validate()){
            setActive(prev=> prev+1);
        }
    }
    const submitForm = () =>{
        if(tabs[active].validate()){
            // hit the api call
            console.log('finaldata', data)
            setData({
                name: 'Praful',
                age: '12',
                email: 'guptapraful130@gmail.com',
                interests: ['chess','volleyball','gaming'],
                theme: 'dark'
            })
        }
    }
    return (
        <div>
            <div className="heading-container">
                {tabs.map((t, i)=> (
                    <div 
                        className={`tabs-container ${active===i ? 'activeTab' : 'nonActiveTab' }`} 
                        key={i} 
                        onClick={() => handleTabChange(i)}
                    >
                        {t.name}
                    </div>
                ))}
            </div>
            <div className="tab-body">
                <ActiveTabComponent data={data} setData={setData} errors={errors} />
            </div>
            <div className="buttons-container">
                { active>0 && <button onClick={goToPrevTab}>Prev</button>}
                { active<tabs.length-1 && <button onClick={goToNextTab}>Next</button>}
                { active===(tabs.length-1) && <button onClick={submitForm}>Submit</button> }
            </div>
        </div>
    )
}

export default TabForm;