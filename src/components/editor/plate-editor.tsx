'use client';

import * as React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import type { Value } from '@udecode/plate';
import { Plate } from '@udecode/plate/react';

import { useCreateEditor } from '@/components/editor/use-create-editor';
import { SettingsDialog } from '@/components/editor/settings';
import { Editor, EditorContainer } from '@/components/ui/editor';

export interface PlateEditorProps {
  initialValue?: Value;
  onChange?: (value: Value) => void;
}

export function PlateEditor({ initialValue, onChange }: PlateEditorProps) {
  const editor = useCreateEditor({ value: initialValue });

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor} onValueChange={({ value }) => onChange(value)}>
        <EditorContainer>
          <Editor variant="demo" />
        </EditorContainer>

        <SettingsDialog />
      </Plate>
    </DndProvider>
  );
}
