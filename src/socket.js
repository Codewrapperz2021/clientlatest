import io from 'socket.io-client';
const sockets = io('http://server.eba-arbcesy3.us-east-1.elasticbeanstalk.com', { autoConnect: true, forceNew: true });
// const sockets = io('/');
export default sockets;
