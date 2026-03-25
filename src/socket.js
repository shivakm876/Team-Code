import {io} from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: 5,
        timeout: 10000,
        transports: ['websocket', 'polling'],
        path: '/socket.io/',
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        randomizationFactor: 0.5
    };
    
    const socketUrl = process.env.REACT_APP_BACKEND_URL || window.location.origin;
    return io(socketUrl, options);
};