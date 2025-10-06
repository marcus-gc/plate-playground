import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { Value } from '@udecode/plate';
import { render } from '@react-email/render';
import { PlateEditor } from '../src/components/editor/plate-editor';
import { Email } from '../src/components/email/email';
import './styles.css';

function App() {
  const [value, setValue] = useState<Value | undefined>();
  const [emailHtml, setEmailHtml] = useState<string>('');

  const handleChange = async (newValue: Value) => {
    setValue(newValue);

    // Render email HTML
    if (newValue && newValue.length > 0) {
      const html =  await render(<Email elements={newValue} />);
      setEmailHtml(html);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-3xl font-bold">GC Email Composer</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4">Editor</h2>
              <PlateEditor onChange={handleChange} />
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4">Editor Value (JSON):</h2>
              <pre className="bg-muted p-4 rounded-md overflow-auto max-h-96">
                <code className="text-sm">
                  {JSON.stringify(value, null, 2)}
                </code>
              </pre>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4">Email Preview</h2>
              <div className="border rounded-md overflow-hidden">
                <iframe
                  srcDoc={emailHtml}
                  className="w-full h-96"
                  title="Email Preview"
                />
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4">Email HTML:</h2>
              <pre className="bg-muted p-4 rounded-md overflow-auto max-h-96">
                <code className="text-sm">
                  {emailHtml}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
