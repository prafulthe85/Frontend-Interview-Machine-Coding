const Profile = ( {data, setData, errors}) =>{
    const { name, email, age} = data;
    const handleInputChange = (e, item) =>{(
        setData((prev)=>({
            ...prev,
            [item] : e.target.value
        }))
    )};
    return (
        <>
            <div>
                <div>
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(e)=>handleInputChange(e, 'name')} />
                    {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>
                <div>
                    <label>Age: </label>
                    <input type="number" value={age} onChange={(e)=>handleInputChange(e, 'age')} />
                    {errors.age && <span className="error-msg">{errors.age}</span>}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email"  value={email} onChange={(e)=>handleInputChange(e, 'email')} />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
            </div>
        </>
    )
}

export default Profile;