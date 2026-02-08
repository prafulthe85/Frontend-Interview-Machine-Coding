const Interests = ({data,setData,errors}) =>{
    const {interests} = data;

    const handleInputChange = (item)=>{
        setData((prev)=>{
            const exists = prev.interests.includes(item);

            return {
                ...prev,
                interests: exists ? 
                            prev.interests.filter((i)=> i!==item )
                            : [...prev.interests, item]
            }
        })
    }

    return (
        <>
            <div>
                <div>
                    <label>
                        <input type="checkbox" name="coding" checked={interests.includes('coding')} onChange={()=>handleInputChange('coding')}/>
                        Coding
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="chess" checked={interests.includes('chess')} onChange={()=>handleInputChange('chess')}/>
                        Chess
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="volleyball" checked={interests.includes('volleyball')} onChange={()=>handleInputChange('volleyball')}/>
                        VolleyBall
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="gaming" checked={interests.includes('gaming')} onChange={()=>handleInputChange('gaming')}/>
                        Gaming
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="music" checked={interests.includes('music')} onChange={()=>handleInputChange('music')}/>
                        Music
                    </label>
                </div>
                {errors.interests && <span className="error-msg">{errors.interests}</span>}
            </div>
        </>
    )
}

export default Interests;