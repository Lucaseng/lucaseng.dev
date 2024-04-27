import {Container, Typography} from "@mui/material";

function Home() {
    return (
        <Container>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <Typography fontFamily={"inter"} fontWeight={"700"} variant="h2">Kia Ora,<br/> I'm Lucas</Typography>
            </div>
        </Container>

    );
}

export default Home;