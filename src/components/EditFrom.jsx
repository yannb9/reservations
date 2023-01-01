import { useEffect, useState } from "react";
import TextInput from "./TextInput";
import SelectFrom from "./SelectFrom"
import { Button } from "@mui/material";

export const EditForm = ({guestData, editGuest}) =>{ 
    const [guestName, setGuestName] = useState(guestData.name)
    const [starter, setStarter] = useState(guestData.starter)
    const [main, setMain] = useState(guestData.main)
    const [dessert, setDessert] = useState(guestData.dessert)

    const starterOptions = ['Salad', 'Soup', 'Chips & Dips']
    const mainCourseOptions = ['Fillet Steak', 'Sea Bass', 'Pan Fried Duck Breast']
    const dessertOptions = ['Crème Brulee', 'Tarte aux Citroen', 'Apple Crumble']

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const editedGuest = {id:guestData.id, name:guestName, starter: starter, main: main, dessert: dessert}
        editGuest(editedGuest)
    }

    return (
        <>
        <form className="editForm" onSubmit={handleFormSubmit}>
            <div className="wrapper">
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
                    <SelectFrom label="Dessert" value={dessert} options={dessertOptions} onChange={(e)=>setDessert(e.target.value)}/>
                </div>
                <Button variant="contained" type="submit" size="medium">Edit Guest</Button>
        </form>
        </>
    )
}