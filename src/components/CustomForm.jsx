import { useState } from "react";
import TextInput from "./TextInput";
import SelectFrom from "./SelectFrom"
import { Button } from "@mui/material";

export const CustomForm = ({addGuest}) =>{ 
    const [guestName, setGuestName] = useState('')
    const [starter, setStarter] = useState('')
    const [main, setMain] = useState('')
    const [dessert, setDessert] = useState('')


    const starterOptions = ['Salad', 'Soup', 'Chips & Dips']
    const mainCourseOptions = ['Fillet Steak', 'Sea Bass', 'Pan Fried Duck Breast']
    const dessertOptions = ['Crème Brulee', 'Tarte aux Citroen', 'Apple Crumble']


    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const newGuest = {id:Date.now(), name:guestName, starter: starter, main: main, dessert: dessert}
        addGuest(newGuest)
        setGuestName('')
        setStarter('')
        setMain('')
        setDessert('')
    }

    return (
        <form className="addGuest" onSubmit={handleFormSubmit}>
            <div className="wrapper" sx={{ display: 'flex', flexDirections:'column' }}>
                <TextInput
                    type="text"
                    label="Name"
                    value={guestName}
                    onChange={(e)=>setGuestName(e.target.value)}
                    required
                    autoFocus
                />
                <SelectFrom label="Starters" value={starter} options={starterOptions} onChange={(e)=>setStarter(e.target.value)}/>
                <SelectFrom label="Main Course" value={main} options={mainCourseOptions} onChange={(e)=>setMain(e.target.value)}/>
                <SelectFrom label="Starters" value={dessert} options={dessertOptions} onChange={(e)=>setDessert(e.target.value)}/>
            </div>
                <Button variant="contained" type="submit" size="medium">Add Guest</Button>
        </form>
    )
}