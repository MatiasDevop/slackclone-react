import React, { useEffect, useState } from 'react'
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from './firebase';
import Message from "./Message";


function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])//this should be and array to not break

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot => (
              setRoomDetails(snapshot.data())
              ))    
        }

        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
            setRoomMessages(
                snapshot.docs.map(doc => doc.data())
            )
        )
    }, [roomId])
    console.log(roomDetails);
    console.log("Messages", roomMessages);

    return (
        <div className="chat">
            {/* <h2>you are in the {roomId} room</h2> */}
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>

                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat_messages">
                {/** message ../> */}
                {roomMessages.map(({message, timestamp, user, userImage}) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat
