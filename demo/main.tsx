import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { Value } from '@udecode/plate';
import { PlateEditor } from '../src/components/editor/plate-editor';
import './styles.css';

function App() {
  const [value, setValue] = useState<Value | undefined>();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold">Plate Editor Demo</h1>

        <div className="rounded-lg border bg-card p-6">
          <PlateEditor onChange={setValue} />
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-4">Editor Value:</h2>
          <pre className="bg-muted p-4 rounded-md overflow-auto max-h-96">
            <code className="text-sm">
              {JSON.stringify(value, null, 2)}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
