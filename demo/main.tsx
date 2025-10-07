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
  };

  React.useEffect(() => {
    if (value && value.length > 0) {
      render(<Email elements={value} />).then(setEmailHtml);
    }
  }, [value])

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">GC Email Composer</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="rounded-lg border p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Editor</h2>
              <PlateEditor onChange={handleChange} />
            </div>

            <div className="rounded-lg border p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Editor Value (JSON)</h2>
              <pre className="p-4 rounded-md overflow-auto max-h-96 bg-slate-50 dark:bg-slate-900">
                <code className="text-xs md:text-sm">
                  {JSON.stringify(value, null, 2)}
                </code>
              </pre>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <div className="rounded-lg border p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Email Preview</h2>
              <div className="border rounded-md overflow-hidden bg-white">
                <iframe
                  srcDoc={emailHtml}
                  className="w-full h-96"
                  title="Email Preview"
                />
              </div>
            </div>

            <div className="rounded-lg border p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Email HTML</h2>
              <pre className="p-4 rounded-md overflow-auto max-h-96 bg-slate-50 dark:bg-slate-900">
                <code className="text-xs md:text-sm break-all whitespace-pre-wrap">
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
