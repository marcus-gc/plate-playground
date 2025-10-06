// Main exports
export { PlateEditor } from './components/editor/plate-editor';
export type { PlateEditorProps } from './components/editor/plate-editor';
export { useCreateEditor } from './components/editor/use-create-editor';

// Email component
export { Email } from './components/email/email';

// Export types
export type * from './components/editor/plate-types';

// Export all UI components
export * from './components/ui/editor';
export * from './components/ui/editor-static';
export * from './components/ui/fixed-toolbar';
export * from './components/ui/floating-toolbar';

// Export all element components
export * from './components/ui/blockquote-element';
export * from './components/ui/code-block-element';
export * from './components/ui/heading-element';
export * from './components/ui/image-element';
export * from './components/ui/link-element';
export * from './components/ui/paragraph-element';
export * from './components/ui/table-element';

// Export leaf components
export * from './components/ui/code-leaf';
export * from './components/ui/highlight-leaf';

// Export utilities
export * from './lib/utils';
