
import { useState } from "react"
import GuestList from "../components/GuestList"
import Guest from "../components/Guest"
import { CustomForm } from "../components/CustomForm"
import { EditForm } from "../components/EditFrom"
import Modal from "../components/Modal"

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export function Reservation() {
    const [guest, setGuest] = useState([])
    const [modal, setModal] = useState(false)
    const [edit, setEdit] = useState('');

    const handleModal = () =>{
        setModal(!modal)
    }
    const closeModal = () =>{
        setEdit('')
        setModal(!modal)
    }

    const addGuest = (guest) =>{
        setGuest(prevState => [...prevState, guest])
        handleModal();
    }

    const deleteGuest = (guest) =>{
        setGuest(prevState => prevState.filter(g=> g.id != guest.id))
    }

    const openEditModal = (selectedGuest) =>{
        handleModal()
        setEdit(selectedGuest)
    }

    const editGuest = (selectedGuest) =>{
        setGuest(prevState=> prevState.map(g=>{
            if(g.id === selectedGuest.id){
                g.name = selectedGuest.name;
                g.starter = selectedGuest.starter;
                g.main = selectedGuest.main;
                g.dessert = selectedGuest.dessert;
            }
            return g;
        }))
        closeModal()
    }

    return (
        <>
            <h1>Reservation</h1>

            <GuestList>
                {/* this will be a row */}
                <Guest 
                    name="Yann Bohbot"
                    starter="Fish & Chips"
                    main="Steak"
                    dessert="Cake"
                />
                {guest.map((guest, index)=>{
                        return(
                            <Guest
                                key={index}
                                unique={index}
                                guest={guest}
                                name={guest.name}
                                starter={guest.starter}
                                main={guest.main}
                                dessert={guest.dessert}
                                deleteGuest={deleteGuest}
                                editGuest={editGuest}
                                openEditModal={openEditModal}
                            />
                        )
                    })
                }
            </GuestList>

            {/* <button onClick={handleModal}>Add Guest</button> */}
            <Fab variant="extended" onClick={handleModal} color="primary" aria-label="add">
                <AddIcon />
                Add Guest
            </Fab>
            <Modal open={modal} onClose={closeModal} title={!!edit.id ? 'Edit Guest': 'Add New Guest'}>
                {!!edit.id ? <EditForm guestData={edit} editGuest={editGuest} /> :  <CustomForm addGuest={addGuest}/> }
            </Modal>
        </>

        
    )
}  