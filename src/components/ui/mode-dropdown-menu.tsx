'use client';

import * as React from 'react';

import {
  type DropdownMenuProps,
  DropdownMenuItemIndicator,
} from '@radix-ui/react-dropdown-menu';
import {
  useEditorRef,
  usePlateState,
} from '@udecode/plate/react';
import { CheckIcon, EyeIcon, PenIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { ToolbarButton } from './toolbar';

export function ModeDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorRef();
  const [readOnly, setReadOnly] = usePlateState('readOnly');
  const [open, setOpen] = React.useState(false);

  let value = 'editing';

  if (readOnly) value = 'viewing';

  const item: Record<string, { icon: React.ReactNode; label: string }> = {
    editing: {
      icon: <PenIcon />,
      label: 'Editing',
    },
    viewing: {
      icon: <EyeIcon />,
      label: 'Viewing',
    },
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={open} tooltip="Editing mode" isDropdown>
          {item[value].icon}
          <span className="hidden lg:inline">{item[value].label}</span>
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[180px]" align="start">
        <DropdownMenuRadioGroup
          value={value}
          onValueChange={(newValue) => {
            if (newValue === 'viewing') {
              setReadOnly(true);

              return;
            } else {
              setReadOnly(false);
            }

            if (newValue === 'editing') {
              editor.tf.focus();

              return;
            }
          }}
        >
          <DropdownMenuRadioItem
            className="pl-2 *:first:[span]:hidden *:[svg]:text-muted-foreground"
            value="editing"
          >
            <Indicator />
            {item.editing.icon}
            {item.editing.label}
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            className="pl-2 *:first:[span]:hidden *:[svg]:text-muted-foreground"
            value="viewing"
          >
            <Indicator />
            {item.viewing.icon}
            {item.viewing.label}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Indicator() {
  return (
    <span className="pointer-events-none absolute right-2 flex size-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <CheckIcon />
      </DropdownMenuItemIndicator>
    </span>
  );
}
