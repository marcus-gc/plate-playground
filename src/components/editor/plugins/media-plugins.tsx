'use client';

import { CaptionPlugin } from '@udecode/plate-caption/react';
import {
  FilePlugin,
  ImagePlugin,
  MediaEmbedPlugin,
  PlaceholderPlugin,
  VideoPlugin,
} from '@udecode/plate-media/react';

import { ImagePreview } from '@/components/ui/image-preview';
import { MediaUploadToast } from '@/components/ui/media-upload-toast';

export const mediaPlugins = [
  ImagePlugin.extend({
    options: { disableUploadInsert: true },
    render: { afterEditable: ImagePreview },
  }),
  MediaEmbedPlugin,
  VideoPlugin,
  FilePlugin,
  CaptionPlugin.configure({
    options: {
      plugins: [
        ImagePlugin,
        VideoPlugin,
        FilePlugin,
        MediaEmbedPlugin,
      ],
    },
  }),
  PlaceholderPlugin.configure({
    options: { disableEmptyPlaceholder: true },
    render: { afterEditable: MediaUploadToast },
  }),
] as const;
