'use client';

import * as React from 'react';

import { NodeApi } from '@udecode/plate';
import {
  type TCodeBlockElement,
  formatCodeBlock,
  isLangSupported,
} from '@udecode/plate-code-block';
import { type PlateElementProps, PlateElement } from '@udecode/plate/react';
import { BracesIcon, CheckIcon, CopyIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { CodeBlockCombobox } from './code-block-combobox';

export function CodeBlockElement(props: PlateElementProps<TCodeBlockElement>) {
  const { editor, element } = props;

  return (
    <PlateElement
      className="py-1 [&_.hljs-addition]:bg-[#f0fff4] [&_.hljs-addition]:text-[#22863a] [&_.hljs-attr]:text-[#005cc5] [&_.hljs-attribute]:text-[#005cc5] [&_.hljs-literal]:text-[#005cc5] [&_.hljs-meta]:text-[#005cc5] [&_.hljs-number]:text-[#005cc5] [&_.hljs-operator]:text-[#005cc5] [&_.hljs-selector-attr]:text-[#005cc5] [&_.hljs-selector-class]:text-[#005cc5] [&_.hljs-selector-id]:text-[#005cc5] [&_.hljs-variable]:text-[#005cc5] [&_.hljs-built_in]:text-[#e36209] [&_.hljs-symbol]:text-[#e36209] [&_.hljs-bullet]:text-[#735c0f] [&_.hljs-comment]:text-[#6a737d] [&_.hljs-code]:text-[#6a737d] [&_.hljs-formula]:text-[#6a737d] [&_.hljs-deletion]:bg-[#ffeef0] [&_.hljs-deletion]:text-[#b31d28] [&_.hljs-emphasis]:italic [&_.hljs-keyword]:text-[#d73a49] [&_.hljs-doctag]:text-[#d73a49] [&_.hljs-template-tag]:text-[#d73a49] [&_.hljs-template-variable]:text-[#d73a49] [&_.hljs-type]:text-[#d73a49] [&_.hljs-variable.language_]:text-[#d73a49] [&_.hljs-name]:text-[#22863a] [&_.hljs-quote]:text-[#22863a] [&_.hljs-selector-tag]:text-[#22863a] [&_.hljs-selector-pseudo]:text-[#22863a] [&_.hljs-regexp]:text-[#032f62] [&_.hljs-string]:text-[#032f62] [&_.hljs-meta_.hljs-string]:text-[#032f62] [&_.hljs-section]:font-bold [&_.hljs-section]:text-[#005cc5] [&_.hljs-strong]:font-bold [&_.hljs-title]:text-[#6f42c1] [&_.hljs-title.class_]:text-[#6f42c1] [&_.hljs-title.class_.inherited__]:text-[#6f42c1] [&_.hljs-title.function_]:text-[#6f42c1]"
      {...props}
    >
      <div className="relative rounded-md bg-muted/50">
        <pre className="overflow-x-auto p-8 pr-4 font-mono text-sm leading-[normal] [tab-size:2] print:break-inside-avoid">
          <code>{props.children}</code>
        </pre>

        <div
          className="absolute top-1 right-1 z-10 flex gap-0.5 select-none"
          contentEditable={false}
        >
          {isLangSupported(element.lang) && (
            <Button
              size="icon"
              variant="ghost"
              className="size-6 text-xs"
              onClick={() => formatCodeBlock(editor, { element })}
              title="Format code"
            >
              <BracesIcon className="!size-3.5 text-muted-foreground" />
            </Button>
          )}

          <CodeBlockCombobox />

          <CopyButton
            size="icon"
            variant="ghost"
            className="size-6 gap-1 text-xs text-muted-foreground"
            value={() => NodeApi.string(element)}
          />
        </div>
      </div>
    </PlateElement>
  );
}

function CopyButton({
  value,
  ...props
}: { value: (() => string) | string } & Omit<
  React.ComponentProps<typeof Button>,
  'value'
>) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      onClick={() => {
        void navigator.clipboard.writeText(
          typeof value === 'function' ? value() : value
        );
        setHasCopied(true);
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <CheckIcon className="!size-3" />
      ) : (
        <CopyIcon className="!size-3" />
      )}
    </Button>
  );
}
