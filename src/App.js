import { useState } from 'react';
import './App.css';

import { CodatLink } from '@codat/link-sdk';
import '../node_modules/@codat/link-sdk/index.css';

const App = () => {
  const [open, setOpen] = useState(false);
  const [complete, setComplete] = useState(false)
  const [connections, setConnections] = useState([])

  const [companyId, setCompanyId] = useState('')

  const startConnecting = () => {
    if(companyId === '') {
      alert('Add a valid company ID')
    } else {
      setOpen(true)
    }
  }

  const reset = () => {
    setOpen(false);
    setConnections([]);
    setCompanyId('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label for="companyId">Company ID:</label>
          <input type="text" id="companyId" name="companyId" value={companyId} onChange={(e) => setCompanyId(e.target.value)}/>
        </form>

        {
          open && <div className="Modal">
              <CodatLink
                companyId={companyId}
                onSuccess={(newConnectionId) => setConnections([...connections, newConnectionId.connectionId])}
                onDone={() => setComplete(true)}
                onClose={() => reset()}
                onError={(error) => {
                  setOpen(false);
                  alert(error);
                }}
              />
            </div>
        }

        {
          !complete && <button onClick={() => startConnecting()}>Start connecting</button>
        }

        <h3>Connection IDs</h3>

        {
          connections.length >= 1
          ? connections.map((id, i)=><div key={i}>{id}</div>)
          : <div>No connections</div>
        }
      </header>
    </div>
  );
}

export default App;
