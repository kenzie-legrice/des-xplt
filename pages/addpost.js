import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function AddPost() {
    // const [title, setTitle] = useState('');
    const [robloxUsername, setRobloxUsername] = useState('')
    const [reportReason, setReportReason] = useState('');
    const [yourUsername, setYourUsername] = useState('')
    const [clan, setClan] = useState('')
    //Config
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();


        //reset error message
        setError('');
        setMessage('');

        //fields check
        if(!reportReason || !robloxUsername || !yourUsername) return setError('All fields are required');

        //post structure
        let post = {
            robloxUsername,
            clan,
            reportReason,
            yourUsername,
            published: false,
            createdAt: new Date().toISOString(),
        };

        //save the post
        let response = await fetch('/api/reportPosts', {
            method: 'POST',
            body: JSON.stringify(post),
        });

        //grab the data
        let data = await response.json();

        if (data.success) {
            // setTitle('');
            setReportReason('');
            setRobloxUsername('');
            setYourUsername('');
            //set the message
            return setMessage(data.message);
        } else {
            return setError(data.message);
        }
    }
    return (
        <div>
            <Navbar />
            <div className="">
                <form onSubmit={handlePost} className="flex flex-col p-4">
                    {error ? (
                        <div className="">
                            <h3 className="">{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div className="">
                            <h3 className="">{message}</h3>
                        </div>
                    ) : null}
                    {/* <div className="bg-slate-400 p-4">
                        <label className='flex'>Title</label>
                        <input
                            type="text"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder="title"
                        />
                    </div> */}

                    <div>
                        <label>Roblox Username</label>
                        <input 
                        type="text"
                        name="robloxUsername"
                        onChange={(e) => setRobloxUsername(e.target.value)}
                        value={robloxUsername}
                        placeholder="Enter Roblox Username" />
                    </div>

                    <div>
                        <label>What's your Roblox User Name?</label>
                        <input 
                        type="text"
                        name="yourUsername"
                        onChange={(e) => setYourUsername(e.target.value)}
                        value={yourUsername}
                        placeholder="Enter Roblox Username" />
                    </div>

                    <div>
                        <label>What clan are they in (if known)</label>
                        <input 
                        type="text"
                        name="clan"
                        onChange={(e) => setClan(e.target.value)}
                        value={clan}
                        placeholder="Enter Clan" />
                    </div>

                    <div className="bg-slate-400 p-4">
                        <label>Report Reason</label>
                        <textarea
                            name="reportReason"
                            onChange={(e) => setReportReason(e.target.value)}
                            value={reportReason}
                            placeholder="Enter your reason for reporting the player"
                        />
                    </div>
                    <div className="">
                        <button type="submit">Add post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}



