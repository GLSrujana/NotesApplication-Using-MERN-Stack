import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Notecard from '../../components/Cards/NoteCard';
import moment from 'moment';
import { MdAdd } from 'react-icons/md';
import AddEditNotes from './AddEditNotes';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const Home = () => {
    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null,
    });

    const [allNotes, setAllNotes] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleEdit = (noteDetails) => {
        setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
    };

    // Get User Info
    const getUserInfo = async () => {
        try {
            const response = await axiosInstance.get("/get-user");
            if (response.data && response.data.user) {
                setUserInfo(response.data.user);
            }
        } catch (error) {
            console.error("Error fetching user info:", error);
            if (error.response && error.response.status === 401) {
                localStorage.clear();
                navigate("/login");
            }
        }
    };

    // Get all notes 
    const getAllNotes = async () => {
        try {
            const response = await axiosInstance.get("/get-all-notes");
            if (response.data && response.data.notes) {
                setAllNotes(response.data.notes);
            }
            setLoading(false);
        } catch (error) {
            console.error("Error fetching all notes:", error);
            setLoading(false);
        }
    };

    // Delete Note
    const deleteNote = async (data) => {
        const noteId = data._id;

        try {
            const response = await axiosInstance.delete("/delete-note/" + noteId);

            if (response.data && !response.data.error) {
                getAllNotes();
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.log("An unexpected error occurred. Try again.");
            }
        }
    };

    useEffect(() => {
        getAllNotes();
        getUserInfo();
    }, []);

    return (
        <>
            <Navbar userInfo={userInfo} />
            <div className="container mx-auto">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        {allNotes.length === 0 ? (
                            <p>No notes available.</p>
                        ) : (
                            allNotes.map((item) => (
                                <Notecard
                                    key={item._id}
                                    title={item.title}
                                    date={moment(item.createdOn).format('Do MMM YYYY')}
                                    content={item.content}
                                    tags={item.tags}
                                    isPinned={item.isPinned}
                                    onEdit={() => handleEdit(item)}
                                    onDelete={() => deleteNote(item)}
                                    onPinNote={() => { }}
                                />
                            ))
                        )}
                    </div>
                )}
            </div>
            <button
                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
                onClick={() => {
                    setOpenAddEditModal({ isShown: true, type: "add", data: null });
                }}
            >
                <MdAdd className="text-32px text-white" />
            </button>
            <Modal
                isOpen={openAddEditModal.isShown}
                onRequestClose={() => setOpenAddEditModal({ isShown: false, type: "add", data: null })}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                    },
                }}
                contentLabel=""
                className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
            >
                <AddEditNotes
                    type={openAddEditModal.type}
                    noteData={openAddEditModal.data}
                    onClose={() => setOpenAddEditModal({ isShown: false, type: "add", data: null })}
                    getAllNotes={getAllNotes}
                />
            </Modal>
        </>
    );
};

export default Home;
