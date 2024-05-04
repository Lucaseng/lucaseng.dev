import { Box, Avatar, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Typewriter from 'typewriter-effect';

function Home() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <Box>
                    <Stack direction="row" spacing={2} paddingBottom={4} alignItems="center" justifyContent="center">
                        {isSmallScreen ? (
                            <>
                                <Typography fontFamily={"inter"} fontWeight={"700"} variant="h3">Kia Ora,<br/> I'm
                                    Lucas.</Typography>
                                <Avatar
                                    alt="Lucas Eng"
                                    src="lucaseng.jpg"
                                    sx={{width: 150, height: 150}}
                                />
                            </>

                        ) : (
                            <>
                                <Typography fontFamily={"inter"} fontWeight={"700"} variant="h1">Kia Ora,<br/> I'm
                                    Lucas.</Typography>
                                <Avatar
                                    alt="Lucas Eng"
                                    src="lucaseng.jpg"
                                    sx={{width: 230, height: 230, marginLeft: 4, marginRight: 4}}
                                />
                            </>

                        )}
                    </Stack>
                    <Box color={theme.palette.text.secondary} style={{fontSize: "1.33em", margin: "auto", textAlign: 'center'}}>
                        <Typewriter
                            options={{
                                delay: 30,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("> I'm stoked to be a Graduate Software Engineer at Xero!")
                                    .start();
                            }}
                        />
                    </Box>
                </Box>
            </div>
        </Container>

    );
}

export default Home;
