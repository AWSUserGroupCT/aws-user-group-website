import { useAuth0 } from "@auth0/auth0-react";
import Grid from '@mui/material/Grid'; 
import Item from '@mui/material/Grid';
import './css/PurpleTheme.css'
const options = [
  {
    category: "Give a Talk",
    items: [
      {
        description: "Give a talk at a meetup. Submit a talk proposal to a meetup that you'd like to speak at.",
        icon: "icon-path-1", 
      },
    ],
  },
  {
    category: "Request a Talk",
    items: [
      {
        description: "Request a talk at a meetup that you'd like to attend",
        icon: "icon-path-2", // Replace with actual icon path or component
      },
      // ...other items
    ],
  },
  {
    category: "Request Credits",
    items: [
      {
        description: "Need credits for a AWS? Request them here.",
        icon: "icon-path-2", // Replace with actual icon path or component
      },
    ],
  },
];

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div style={{ textAlign: 'center', marginTop: "3%" }}>
      <h1 className='purple_welcome_left'> Welcome, {user?.name ?? "Unknown"}</h1>
      <div style={{ marginLeft: '20px'}}>
        <h4 className="purple_standard_paragraph">Please select an option below to get started </h4>
      </div>
      <div style={{ marginLeft: '20%', marginTop: "5%" }}>
        <Grid container spacing={10}>
          {options.map((option, index) => (
            <Grid item xs={8} md={3} key={index}>
              <Card style={{ background: 'linear-gradient(45deg, #B3E5FC, #E1BEE7)', color: 'black', height: '80%', transform: 'scale(1.2) translateY(-5%)', marginBottom: '20px' }}>
                <CardContent style={{ textAlign: 'center' }}>
                  <Typography variant="h6" component="div">
                    {option.category}
                  </Typography>
                  {option.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <Typography variant="h6" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};


export default Profile;