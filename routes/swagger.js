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
                url: "http://localhost:8888"
            }
        ],
        host: 'localhost:8888',
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