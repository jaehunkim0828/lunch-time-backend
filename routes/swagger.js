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
                url: 'http://localhost:8888'
            }
        ],
        host: 'http://localhost:8888',
        basePath: '/',
        scheme: ['http', 'https'],
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