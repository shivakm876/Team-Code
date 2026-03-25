import React, {useState} from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate} from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const [isCreating, setIsCreating] = useState(false);

    const createNewRoom = (e) => {
        e.preventDefault();
        setIsCreating(true);
        try {
            const id = uuidV4();
            setRoomId(id);
            toast.success('New room created! Share the Room ID with others');
        } catch (error) {
            toast.error('Failed to create room. Please try again.');
            console.error('Error creating room:', error);
        } finally {
            setIsCreating(false);
        }
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

    return (
        <div className="modern-homepage">
            {/* Animated background elements */}
            <div className="background-effects">
                <div className="floating-orb orb-1"></div>
                <div className="floating-orb orb-2"></div>
                <div className="floating-orb orb-3"></div>
                <div className="grid-pattern"></div>
                <div className="sparkles">
                    <div className="sparkle sparkle-1">✦</div>
                    <div className="sparkle sparkle-2">✧</div>
                    <div className="sparkle sparkle-3">⋆</div>
                    <div className="sparkle sparkle-4">✦</div>
                    <div className="sparkle sparkle-5">✧</div>
                </div>
            </div>

            {/* Main container */}
            <div className="modern-form-wrapper">
                {/* Header */}
                <div className="modern-header">
                    <div className="logo-container">
                        <div className="logo-icon">
                            <div className="code-symbol">&lt;/&gt;</div>
                        </div>
                    </div>
                    <h1 className="modern-app-name">TeamCode</h1>
                    <p className="modern-app-slogan">
                        <span className="sparkle-icon">✨</span>
                        Create. Code. Collaborate.
                        <span className="users-icon">👥</span>
                    </p>
                </div>

                {/* Form */}
                <div className="modern-form">
                    <div className="input-group-modern">
                        <label htmlFor="roomId" className="modern-label">
                            Room ID
                        </label>
                        <div className="input-wrapper">
                            <input
                                id="roomId"
                                type="text"
                                className="input-field"
                                placeholder="Enter room ID or create new"
                                value={roomId}
                                onChange={(e) => setRoomId(e.target.value)}
                                onKeyUp={handleInputEnter}
                            />
                            {roomId && (
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(roomId);
                                        toast.success('Room ID copied to clipboard!');
                                    }}
                                    className="copy-btn"
                                    title="Copy Room ID"
                                >
                                    📋
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="input-group-modern">
                        <label htmlFor="username" className="modern-label">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="input-field"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyUp={handleInputEnter}
                            minLength={3}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="button-group">
                        <button 
                            onClick={joinRoom}
                            className="join-btn modern-btn"
                            disabled={!roomId.trim() || !username.trim()}
                        >
                            Join Room →
                        </button>

                        <div className="divider">
                            <span>or</span>
                        </div>

                        <button
                            onClick={createNewRoom}
                            disabled={isCreating}
                            className="create-btn modern-btn"
                        >
                            {isCreating ? (
                                <>
                                    <div className="loading-spinner"></div>
                                    Creating Room...
                                </>
                            ) : (
                                '+ Create New Room'
                            )}
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="modern-footer">
                    <p>🚀 Start coding together in seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Home;