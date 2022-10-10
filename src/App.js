import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { CodatLink } from '@codat/link-sdk';
import '../node_modules/@codat/link-sdk/index.css';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        
        {
          open
          ? <CodatLink
            companyId="72f36c8e-997e-48a9-9515-de668a9330d1"
            onSuccess={() => alert('success')}
            onError={() => alert('error')}
            onClose={() => alert('closed')}
          />
          : <button onClick={() => setOpen(true)}>Hello</button>
      }
      </header>
    </div>
  );
}

export default App;
