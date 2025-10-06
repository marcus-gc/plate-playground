import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
} from '@react-email/components';
import type { Value } from '@udecode/plate';

interface EmailProps {
  elements: Value;
}

interface PlateElement {
  type: string;
  children: Array<{ text?: string; bold?: boolean; italic?: boolean; underline?: boolean; [key: string]: any }>;
  [key: string]: any;
}

const renderTextNode = (child: any): React.ReactNode => {
  let text = child.text || '';

  if (!text) return null;

  // Apply text formatting
  if (child.bold) {
    text = <strong key={Math.random()}>{text}</strong>;
  }
  if (child.italic) {
    text = <em key={Math.random()}>{text}</em>;
  }
  if (child.underline) {
    text = <u key={Math.random()}>{text}</u>;
  }

  return text;
};

const renderChildren = (children: any[]): React.ReactNode => {
  return children.map((child, index) => (
    <React.Fragment key={index}>
      {renderTextNode(child)}
    </React.Fragment>
  ));
};

const renderElement = (element: PlateElement, index: number): React.ReactNode => {
  const { type, children } = element;
  const content = renderChildren(children);

  switch (type) {
    case 'h1':
      return (
        <Heading key={index} as="h1" style={styles.h1}>
          {content}
        </Heading>
      );

    case 'h2':
      return (
        <Heading key={index} as="h2" style={styles.h2}>
          {content}
        </Heading>
      );

    case 'h3':
      return (
        <Heading key={index} as="h3" style={styles.h3}>
          {content}
        </Heading>
      );

    case 'h4':
      return (
        <Heading key={index} as="h4" style={styles.h4}>
          {content}
        </Heading>
      );

    case 'h5':
      return (
        <Heading key={index} as="h5" style={styles.h5}>
          {content}
        </Heading>
      );

    case 'h6':
      return (
        <Heading key={index} as="h6" style={styles.h6}>
          {content}
        </Heading>
      );

    case 'p':
      return (
        <Text key={index} style={styles.paragraph}>
          {content}
        </Text>
      );

    case 'blockquote':
      return (
        <blockquote key={index} style={styles.blockquote}>
          {content}
        </blockquote>
      );

    default:
      return (
        <div
          key={index}
          style={{
            padding: '8px',
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '4px',
            color: '#856404',
            marginBottom: '8px',
          }}
        >
          ⚠️ Missing element type: <code>{type}</code>
        </div>
      );
  }
};

const styles = {
  h1: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginTop: '0',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  h2: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginTop: '0',
    marginBottom: '14px',
    lineHeight: '1.3',
  },
  h3: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '0',
    marginBottom: '12px',
    lineHeight: '1.4',
  },
  h4: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '0',
    marginBottom: '10px',
    lineHeight: '1.4',
  },
  h5: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '0',
    marginBottom: '8px',
    lineHeight: '1.4',
  },
  h6: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '0',
    marginBottom: '8px',
    lineHeight: '1.4',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginTop: '0',
    marginBottom: '12px',
  },
  blockquote: {
    borderLeft: '4px solid #e5e7eb',
    paddingLeft: '16px',
    marginLeft: '0',
    marginRight: '0',
    fontStyle: 'italic',
    color: '#6b7280',
  },
};

export function Email({ elements }: EmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
          {elements?.map((element, index) => renderElement(element as PlateElement, index))}
        </Container>
      </Body>
    </Html>
  );
}
