const Settings = ({data,setData,errors}) =>{
    const {theme} = data;
    const handleInputChange = (e) =>{
        setData((prev)=>({
            ...prev,
            theme: e.target.name
        }))
    }
    return (
        <>
        <div>
            <div>
                <label>
                    <input type="radio" name="dark" checked={theme==='dark'} onChange={handleInputChange}/>
                    Dark
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="light" checked={theme==='light'} onChange={handleInputChange}/>
                    Light
                </label>
            </div>
        </div>
        </>
    )
}

export default Settings;