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
        basePath: '/swagger'
    },
    apis: ['./routes/*.js', './model/*.js'],
}



export default options;