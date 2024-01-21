import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage, sendMessage, updateMessage } from './redux/Users';


function App() {

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
            <p>{message.sender}: {message.message}</p>
            <p>{message.receiver}: {message.message}</p>
          </div>
        ))
       }
       <button onClick={() => dispatch(sendMessage())}>Send message</button>
       <button onClick={() => dispatch(deleteMessage())}>Delete message</button>
       <button onClick={() => dispatch(updateMessage())}>Update message</button>
      </header>
    </div>
  );
}

export default App;
