"use client";
import React from 'react';
import {links} from "./links";
import Link from "next/link";

import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  Grid,
  CardMedia,
  Grow, Divider, useTheme
} from '@mui/material';

// FIXME checkout https://mui.com/components/use-media-query/#migrating-from-withwidth
//const withWidth = () => (WrappedComponent) => (props) => <WrappedComponent {...props} width="xs" />;


function getBaseImageURLKey() { // TODO
  return "/images";
}

function Underline() {
  return <Box component={"span"} sx={{
    height: '4px',
    width: '55px',
    display: 'block',
    margin: '8px auto 0',
    backgroundColor: 'primary.main',
  }}></Box>;
}


function MultiActionAreaCard(props: any) {
  return (
      <Card sx={{textAlign: 'center'}}>
        <div>
          <CardMedia
              component="img"
              height="350"
              image={props.imageURL}
              alt={props.imageAlt}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        {/*<CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>*/}
      </Card>
  );
}

function MainFeature(props: { headingLeft: boolean, heading: string, content: React.ReactElement, videoURL: string, videoTitle: string  }) {

  const heading = <Box sx={{paddingBottom: "3rem", maxWidth: '50%'}}>
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
      <Box sx={{maxWidth: '40rem'}}>
        <Typography variant={"h2"}>
          {props.heading}
        </Typography>
      </Box>
      <Box sx={{maxWidth: '30rem'}}>
        {props.content}
      </Box>
    </Box>
  </Box>;


  // clipPath: 'inset(25px 0 25px 0 round 0 500px 500px 0)'
  const image = <Box sx={{paddingLeft: "3rem", height: '350px', borderRadius: '0', overflow: 'hidden', maxWidth: '100%',

    //clipPath: 'circle(90% at 90% 90%)'
    //clipPath: 'inset(1px 0 1px 0 round 0 400px 400px 0)'
  }}>
    {/* TODO Video */}
    <video autoPlay={true} loop muted={true} playsInline={true} role={'img'} title={props.videoTitle}
           style={{height: "100%", overflow: 'hidden',}} >
      <source src={getBaseImageURLKey() + props.videoURL} type="video/mp4" />

    </video>
  </Box>;

  return <Box sx={{width: "100%", display: "flex", justifyContent: "center", paddingTop: "5rem", paddingBottom: "5rem", alignItems: "center", flexWrap: "wrap", backgroundColor: '#f4ede4'}}>

    {props.headingLeft === true ? heading : image}

    {props.headingLeft === true ? image : heading}

  </Box>;
}

export default function Home(props: any){

  /*componentDidMount() {
      window.addEventListener("resize", this.handleResize);
      this.setState({windowSize: window.innerWidth});
  }
  componentWillUnmount() {
      window.addEventListener("resize", null);
  }*/
  /* handleResize = () => {
      this.setState({windowSize: window.innerWidth});
  }*/



  //const { classes, theme } = this.props;

  //console.log('THEME', theme);
  const attentionHeader = { margin: "70px", fontSize: "5vw", textAlign: "center" }
  const mainHeader = {
    backgroundColor: 'primary.main',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '8rem',
    paddingBottom: '8rem',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%'
  }


  const classes = {

   /* card: {
      margin: 2,
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: 345,
      },
      [theme.breakpoints.up('lg')]: {
        width: 345,
      },
    },*/
    card: (theme : any) => ({
      margin: 2,
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: 345,
      },
      [theme.breakpoints.up('lg')]: {
        width: 345,
      },
    }),
    cardContent: {
      minHeight: 75,
    },
    cardHeader: {
      paddingBottom: 2,
    },
    cards: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    planTypes : {
      marginTop: '2rem',
    },
    punchline: {
      //paddingBottom: theme.spacing(2),
    },
    homeColorBoxes: {
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'center',
      margin: '5rem 0 5rem 0',
      fontSize: '1.5rem',
      width: '100%'
    },
    homeColorBox: {
      flexGrow: 1,
      flexBasis: 0,
      //padding: '2rem',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      minWidth: '250px'
    },

    signupSection: { fontSize: "3.2rem", textAlign: "center" },
    colorBoxBusiness: { backgroundColor: "#888387" },
    colorBoxPersonal: { backgroundColor: "#37474F" },
    attentionHeader: { margin: "70px", fontSize: "5vw", textAlign: "center" },
    section: {
      //paddingBottom: "50px"
    },

  };


  return (
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        width: {xs: '100%', sm: '100%', md: '100%'},
        backgroundColor: 'white'
      }}>

        <Box sx={mainHeader}>
          <Box sx={{paddingBottom: '3rem'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
              <Typography variant={"h1"} color={"white"}>
                Social DOING.
                <Underline/>
              </Typography>
              <Typography sx={{padding: 2}} variant={"h3"} color={"white"}>Create or join
                challenges.</Typography>
              <Box sx={{padding: 3}}>
                <Button sx={{padding: 1}} size="medium" color="secondary" variant="contained"
                        LinkComponent={Link} href={links.signup}>
                  Register for FREE
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{paddingLeft: '3rem'}}>
            <img src={getBaseImageURLKey() + "/mockup-screenshot-challenge-daily-steps.png"}
                 style={{height: '300px'}} alt={"Example of a daily steps challenge"}/>
          </Box>
        </Box>

        {/*<Box sx={{display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column'}}>
                    <div>
                        <KeyboardArrowDownIcon />
                    </div>
                </Box>*/}

        {/* Add examples/mock up of what the UI looks like */}

        {/* Add reviews from people */}

        {/* Create a video */}

        {/*<Grow in={true} timeout={2000}>
                    <Box sx={{
                        padding: "50px 50px 50px 50px",
                        textAlign: "center",
                        wordBreak: 'break-word',

                    }}>
                        <Typography variant="h5" className={classes.punchline}>
                            Tied of searching for motivational quotes? You wont find any here.
                            You will find the ability to challenge others (or just yourself) to reach a goal in a fun way.
                        </Typography>
                    </Box>
                </Grow>*/}

        {/*<MainFeature classes={classes}
                    headingLeft={true}
                    heading={"Join Your Friends In A Challenge."}
                    videoURL={"/videos/collect-5-bags-of-trash-team.mp4"}
                    content={<Typography sx={{padding: 2}}>
                    Friendly competition: Sweat it out side-by-side in personalized challenges, from 30-day yoga
                    to weekly step count showdowns.
                    Cheer each other on, celebrate milestones, and commiserate over sore muscles.
                    See your friends' progress in real-time, adding a layer of friendly competition and
                    accountability that'll keep you pushing through.
                    </Typography>}  />*/}

        <MainFeature headingLeft={true}
                     heading={"Track your progress."}
                     videoURL={"/videos/collect-5-bags-of-trash-team.mp4"}
                     videoTitle={"Example of a person tracking their progress on a challenge"}
                     content={<Typography sx={{padding: 2}}>
                       No more wondering &quot;am I making progress?&quot; Our graphs paint a crystal-clear picture, keeping you motivated and accountable every step of the way.
                       So, step into the future of goal-setting and unlock the power of data visualization.
                       Chart your course to greatness, together!
                     </Typography>}  />

        <MainFeature headingLeft={false}
                     heading={"Automated Progress Tracking."}
                     videoURL={"/videos/automatic-progress-tracking.mp4"}
                     videoTitle={"Example of a persons steps automatically displaying on a challenge"}
                     content={<Typography sx={{padding: 2}}>
                       Keep track of your progress automatically with some challenge types. Connect your Fitbit and automatically keep track of your steps. Do you get more steps than your friends?
                     </Typography>}  />

        <MainFeature headingLeft={true}
                     heading={"Create Or Join A Team."}
                     videoURL={"/videos/join-team.mp4"}
                     videoTitle={"Example of a person joining a team"}
                     content={<Typography sx={{padding: 2}}>
                       You don&apos;t always have to compete against your friends. You can join a team and compete against other teams or just be a single team where no one wins.
                       Create a single team challenge to pick up trash in your neighborhood. The environment wins!
                     </Typography>}  />

        <Box
            sx={{paddingTop: '3rem', paddingBottom: '3rem', paddingRight: 1, paddingLeft: 1, display: 'flex', alignItems: 'center', flexDirection: 'column', width: {sm: '100%', md: '70%',}}}>
          <div>
            <Typography variant="h2" gutterBottom color={'inherit'} sx={{padding: 3}}>
              Challenge Ideas
            </Typography>
          </div>
          <div>
            <Typography variant="h5" gutterBottom color={'inherit'} sx={{textAlign: 'center'}}>
              We provide multiple ways to be help motivate yourself or others. One of our favorites
              are &ldquo;challenges&ldquo;. Invite others to your challenge or join some else&apos;s.
            </Typography>

          </div>
        </Box>

        {/* TODO User reviews of people and the challenges they created. */}


        <Grid container spacing={1} sx={{padding: 1}}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <MultiActionAreaCard
                imageURL={getBaseImageURLKey() + "/home-challenge-beautiful-places.jpg"}
                imageAlt={"Beautiful place"}
                description={"Create a travel challenge. Visit beautiful places."}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <MultiActionAreaCard
                imageURL={getBaseImageURLKey() + "/home-challenge-hike.jpg"}
                imageAlt={"People hiking in the mountains"}
                description={"Create a hike challenge. See different places."}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <MultiActionAreaCard
                imageURL={getBaseImageURLKey() + "/home-challenge-camping-sunset.jpg"}
                imageAlt={"People camping in nature"}
                description={"Create a camping challenge. Experience the great outdoors."}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <MultiActionAreaCard
                imageURL={getBaseImageURLKey() + "/home-challenge-walking.jpg"}
                imageAlt={"Persons feet walking on a path"}
                description={"Create a steps challenge. Improve your fitness."}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <MultiActionAreaCard
                imageURL={getBaseImageURLKey() + "/home-challenge-kayak-lake.jpg"}
                imageAlt={"Person kayaking on a lake"}
                description={"Create a location challenge. Kayak different lakes."}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <MultiActionAreaCard
                imageURL={getBaseImageURLKey() + "/home-challenge-travel-world.jpg"}
                imageAlt={"Map of the world"}
                description={"Create a location challenge. Travel around the world."}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <MultiActionAreaCard
                imageURL={getBaseImageURLKey() + "/home-challenge-dog.jpg"}
                imageAlt={"Golden retriever sitting"}
                description={"Create a location challenge. Take man's best friend to different places."}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <MultiActionAreaCard
                imageURL={getBaseImageURLKey() + "/home-challenge-bike-to-work-or-store.jpg"}
                imageAlt={"Bike at a bike stand"}
                description={"Create a exercise challenge. Bike to work instead of driving."}
            />
          </Grid>

        </Grid>


        <Box component={"div"} sx={{
          textAlign: 'center',
          paddingTop: '6rem',
          paddingBottom: '6rem',
        }}>
          <Typography variant={"h4"}>
            You can create custom challenges or you can view all the already made challenges.
          </Typography>
        </Box>


        <Box component={"div"} sx={{width: '70%'}}>
          <Divider/>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
          paddingTop: '100px',
          paddingBottom: '100px',
        }}>
          <Box sx={{textAlign: 'center'}}>
            <Typography variant={"h2"} sx={{padding: 3}}>GOALS</Typography>
            <Typography variant={"h5"} sx={{padding: 3}}>
              Are you tracking your personal goals? You should be. We provide a way to track your goals
              and share them with your friends and family.
            </Typography>
          </Box>
        </Box>

        <Box sx={attentionHeader}>
          <Typography variant={"h3"}>
            &quot;Create a goal to help you achieve your dreams. Invite others to help you along the
            way.&quot;- Someone smart.
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
          padding: '100px',
          width: '100%'
        }}>
          <div>
            <img src={getBaseImageURLKey() + "/goals_target_with_arrow_vector_icon.png"}
                 style={{height: '300px'}}
                 alt="Dart board with a dart in the middle"/>
          </div>
          <Box sx={{textAlign: 'center'}}>
            <Typography variant={"h3"} sx={{padding: 3}}>Benefits of goals</Typography>
            <Typography variant={"h5"} sx={{padding: 3}}>
              <Typography sx={{paddingBottom: 1}}>- Clarity and Focus</Typography>
              <Typography sx={{paddingBottom: 1}}>- Motivation</Typography>
              <Typography sx={{paddingBottom: 1}}>- Measure progress</Typography>
              <Typography sx={{paddingBottom: 1}}>- Increased productivity</Typography>
              <Typography sx={{paddingBottom: 1}}>- Personal growth</Typography>
              <Typography sx={{paddingBottom: 1}}>- Greater self-confidence</Typography>
            </Typography>
          </Box>
        </Box>

        {/* TODO Quotes for goals. */}


        <Box sx={classes.cards}>
          <Card sx={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2" sx={classes.cardHeader}>
                Work
              </Typography>
              <Typography component="p" sx={classes.cardContent}>
                Motivate your work colleagues by creating some fun and friendly competition
              </Typography>
            </CardContent>
            {/*<CardActions>
                            {learnMoreContent}
                        </CardActions>*/}
          </Card>

          <Card sx={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2" sx={classes.cardHeader}>
                School
              </Typography>
              <Typography component="p" sx={classes.cardContent}>
                Motivate your students or class mates to complete an assignment or group project.
              </Typography>
            </CardContent>
            {/*<CardActions>
                            {learnMoreContent}
                        </CardActions>*/}
          </Card>

          <Card sx={classes.card}>
            <CardContent sx={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2" sx={classes.cardHeader}>
                Family
              </Typography>
              <Typography component="p" sx={classes.cardContent}>
                Motivate your family members to perform tasks and get rewards of your choosing.
              </Typography>
            </CardContent>
            {/*<CardActions>
                            {learnMoreContent}
                        </CardActions>*/}
          </Card>

        </Box>


        {/*<div className={classes.homeColorBoxes}>

                    <div className={[classes.homeColorBox, classes.colorBoxBusiness].join(' ')}>
                        <div>
                            <Typography variant="h4" color={"inherit"} className={classes.planTypes}>
                                For work
                            </Typography>
                            <Typography variant="subtitle1" color={"inherit"} className={classes.planTypes}>
                                I would like to use this at at work.
                            </Typography>
                            <Button size="small" variant="contained" component={businessPlansLink}
                                className={classes.planTypes}>
                                See Plans
                            </Button>
                        </div>
                    </div>

                    <div className={[classes.homeColorBox, classes.colorBoxPersonal].join(' ')}>
                        <div>
                            <Typography variant="h4" color={"inherit"} className={classes.planTypes}>
                                For me
                            </Typography>
                            <Typography variant="subtitle1" color={"inherit"} className={classes.planTypes}>
                                I would like to use this at home, school, with friends...etc.
                            </Typography>
                            <Button size="small" variant="contained" component={personalPlansLink}
                                className={classes.planTypes}>
                                See Plans
                            </Button>
                        </div>
                    </div>

                </div>*/}

        {/* TODO Goals... */}

        {/* TODO FAQ */}


        <Box sx={{width: '100%'}}>
          <Box sx={classes.signupSection}>
            <Box sx={{paddingTop: '10rem', paddingBottom: '10rem'}}>
              <Typography variant={"h4"}>
                Ready to try it for free?
              </Typography>
              <Button size="medium" color="primary" variant="contained" LinkComponent={Link}
                      href={links.signup}>
                Ok, Lets Start
              </Button>
            </Box>
          </Box>
        </Box>

      </Box>
  );

}
