import dotenv from 'dotenv';
dotenv.config();

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: 'lunchTime Api',
            version: '1.0.0',
            description: 'lunchTime API with express'
        },
        servers: [
            {
                url: process.env.SWAGGER_HOST
            }
        ],
        host: 'http://3.35.216.95',
        basePath: '/',
        securityDefinitions: {
            api_key: {
                type: 'apiKey',
                in: 'header',
                name: 'api_key'
            }
        }
    },
    apis: ['./model/*.js'],
}



export default options;