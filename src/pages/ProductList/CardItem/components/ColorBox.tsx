import Box from '@mui/material/Box';

interface ColorBoxProps {
    color:string;
}
const ColorBox = ({color}:ColorBoxProps) => {
  return (
    <Box
      sx={{
        width: '10px',
        height: '10px',
        padding: '5px',
        border: '1px solid',
        backgroundColor: color,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}

export {ColorBox}