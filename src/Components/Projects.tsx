import {Box, Container, Typography} from "@mui/material";

function Home() {

    return (
        <Container>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <Box>
                    <Typography fontFamily={"inter"} fontWeight={"700"} variant="h1">Projects.</Typography>
                </Box>
            </div>
        </Container>

    );
}

export default Home;
