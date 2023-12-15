CV project with Node.js and Docker
Development phase
Clone the repository:

git clone https://github.com/youssefmejbri/portfolio.git
cd portfolio
Building and Running with Docker Compose:

Build and run the Docker containers using Docker Compose:

docker-compose up 
This command will build the Docker image and start the container.

Access the Application:

Open http://localhost:3000 with your browser to view the application.

Development in the Container:

You are now inside the container. Carry out your development tasks as normal. The page updates automatically as you edit the file.

Container Shutdown:

When you're done, you can stop and remove the containers by running:

docker-compose down
Other Useful Commands:

To list all running containers:

docker ps
To list all containers (including stopped ones):

docker ps -a
To stop a running container:

docker stop <CONTAINER_ID>
Additional Notes:

Make sure the port needed for development is exposed in the Dockerfile.
Development-specific configurations can be adjusted in the Dockerfile or docker-compose.yml as needed.
