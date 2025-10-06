# Plate Editor

A rich text editor component library built with [Plate](https://platejs.org) and React.

## Installation

```bash
npm install @your-org/plate-editor
# or
pnpm add @your-org/plate-editor
# or
yarn add @your-org/plate-editor
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install react@^19.0.0 react-dom@^19.0.0
```

## Usage

### Basic Usage

```tsx
import { PlateEditor } from '@your-org/plate-editor';
import '@your-org/plate-editor/styles.css';

function App() {
  return <PlateEditor />;
}
```

### Advanced Usage with Custom Editor

```tsx
import { useCreateEditor, Editor, EditorContainer } from '@your-org/plate-editor';
import { Plate } from '@udecode/plate/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function CustomEditor() {
  const editor = useCreateEditor();

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant="demo" />
        </EditorContainer>
      </Plate>
    </DndProvider>
  );
}
```

## Features

This editor includes support for:

- **Rich text formatting**: Bold, italic, underline, strikethrough, code
- **Block elements**: Headings, paragraphs, blockquotes, code blocks
- **Lists**: Ordered and unordered lists with indentation
- **Media**: Images, videos (YouTube), audio
- **Tables**: Full-featured table support
- **Links**: Inline links with editing capabilities
- **Comments**: Collaborative commenting
- **AI features**: AI-powered text completion and commands
- **Drag and drop**: Reorder blocks with drag and drop
- **Equations**: Math equations with KaTeX
- **Mentions**: @-mentions support
- **Emojis**: Emoji picker
- **Date picker**: Insert dates
- **And much more!**

## Development

### Build

```bash
pnpm build
```

### Development Mode

```bash
pnpm dev
```

### Type Checking

```bash
pnpm typecheck
```

## License

MIT
