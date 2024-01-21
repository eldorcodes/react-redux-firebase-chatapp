import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage, sendMessage, updateMessage } from './redux/Users';
import { useState } from 'react';


function App() {
  const [message,setMessage] = useState('');

  const dispatch = useDispatch();

  const messages = useSelector((state) => {
    console.log('state',state);
    return state.users.messages;
  });

  console.log(messages);


  return (
    <div className="App">
      <header className="App-header">
       {
        messages?.map((message,index) => (
          <div key={index}>
            <p>{message && message.payload}</p>
          </div>
        ))
       }
       <input type="text" placeholder='Type message..' onChange={(e) => setMessage(e.target.value)} />
       <button onClick={() => dispatch(sendMessage({type:'SEND_MESSAGE',payload:message}))}>Send message</button>
       <button onClick={() => dispatch(deleteMessage())}>Delete message</button>
       <button onClick={() => dispatch(updateMessage())}>Update message</button>
      </header>
    </div>
  );
}

export default App;
