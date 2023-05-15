import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        padding: '1rem',
        backgroundColor: '#1956a0',
        color: 'white',
      }}
    >
      <Box sx={{ marginRight: '1rem' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4420166840587!2d73.8656287760407!3d18.46362697090945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea950f616219%3A0x321bdae2cea9f064!2sVishwakarma%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1684188817918!5m2!1sen!2sin"
          width="800"
          height="350"
          style={{ border: '0' }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          flexDirection: 'column',
          width: '30%',
          height: '100%',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          CONNECT US
        </Typography>
        <Box>
          <Typography> Dr. M.Seetha </Typography>
          <Typography>Professor & Head, CSE Department</Typography>
        </Box>
        <Box>
          <Typography>
            G.Narayanamma Institute of Technology & Science (for Women)
            (Autonomous) Shaikpet, Hyderabad – 500104 Telangana State, India
          </Typography>
        </Box>{' '}
        <Box>
          <Typography>
            Email : gnits.icicc2022@gmail.com Phone: +91-040-29565856, 29567756
            Extension: 305/321 Mobile Numbers : +91 9100413469 / 9739372137
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
