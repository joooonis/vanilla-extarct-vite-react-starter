import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: '710px',
  height: '100vh',
  margin: 'auto',
  position: 'relative',
  maxHeight: 'fit-content',
  border: '1px solid #eee',
  borderRadius: '4px',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 0',
  borderBottom: '1px solid #eee',
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 0',
  borderTop: '1px solid #eee',
});
