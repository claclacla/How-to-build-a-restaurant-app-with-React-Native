# How to build a restaurant app with React Native

## Create a complete mobile application with React Native

--------------------------------------------------------------------------------

### Prerequisites

What things you need to install the software

```
docker 17+
docker-compose 1.19.0+

```

--------------------------------------------------------------------------------

### Create a new project

```bash
# Install the application for creating a new Native project
npm install -g create-react-native-app

# Create a new project with the following command
create-react-native-app <project-folder>

```

--------------------------------------------------------------------------------

### Development

```bash
# Change the directory to the docker development 
cd docker/dev

# Create a .env file with your local application folder
echo "APP_FOLDER=/path-to-your-local/app" > .env 

# Run the micro services using docker compose
sudo docker-compose up -d

# Connect your mobile to your laptop. If they aren't on the same wifi network,
# activate the usb tethering for sharing the mobile network with your computer.

# Find your local laptop address using a tool like ifconfig.

# Install Expo Client(http://expo.io) on your phone. 

# Launch the Expo Client and insert manually the Native server address
# on "Explore" tab search bar:
# exp://<your-laptop-ip-address>:19000

# For watching the console logs open a terminal and use the following command:
# sudo docker logs RestaurantMobileApp --follow

```

#### Docker services

```
# API server
Port: 3000

# React Native server
Port: 19000

```

--------------------------------------------------------------------------------

## Authors

- **Simone Adelchino** - [_claclacla_](https://twitter.com/_claclacla_)

--------------------------------------------------------------------------------

## License

This project is licensed under the MIT License

--------------------------------------------------------------------------------

## Acknowledgments

- [React Native](https://facebook.github.io/react-native)
- [Expo](https://expo.io)
- [React navigation](https://reactnavigation.org)
- [Environment variables module](https://github.com/zetachang/react-native-dotenv)