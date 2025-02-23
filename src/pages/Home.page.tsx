import { Button, Container, Stack, Text, Title, Center, Overlay } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import bgImage from "../components/background.png";
import { io } from 'socket.io-client';

const socket = io('http://localhost:5100'); // Connect to Flask WebSocket server

export function HomePage() {
  const navigate = useNavigate();

  const handleStartInterview = () => {
    socket.emit("start_interview");
    navigate("/editor");
  }

  return (
    <div style={{
      position: "relative",
      height: "100vh",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover", // Ensures the image covers the screen
      backgroundPosition: "center",
    }}>
      <Overlay opacity={0.0} color="#000" zIndex={1} />
      <Center style={{
        height: "100vh",
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end", // Center content vertically
        alignItems: "center", // Center content horizontally
        padding: "0 20px", // Add some padding on the sides for smaller screens
      }}>
        <Container>
          <Stack 
            align="center" 
            style={{ marginTop: '-300px' }} // Add negative margin to move everything up
          >
            <Title 
              order={1} 
              size={60} 
              fw={700} 
              style={{ color: "white", textAlign: "center" }}
            >
            </Title>
            <Text 
              size="lg" 
              c="gray.3" 
              style={{ maxWidth: 600, textAlign: "center" }}
            >
              AI mock interviewer for technical roles
            </Text>
            <Button
              size="lg"
              radius="xl"
              variant="gradient"
              gradient={{ from: "#FF4500 ", to: "#D16002" }}
              onClick={handleStartInterview}
              style={{ marginTop: "4px" }}
            >
              Start Interview
            </Button>
          </Stack>
        </Container>
      </Center>
    </div>
  );
}
