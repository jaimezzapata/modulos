import express from 'express'
import { conn } from './src/config/database.js'
import { router_usuario } from './src/router/RouterUsuarios.js'
import { router_curso } from './src/router/RouterCursos.js'
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';

// Leer el JSON usando FS para evitar problemas de bundlers en Serverless
const swaggerPath = path.resolve(process.cwd(), 'swagger.json');
const swaggerDoc = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));

const app = express()
app.use(express.json())
app.use(router_usuario)
app.use(router_curso)

// IMPORTANTE: Usar CDNs para CSS y JS de Swagger en Vercel
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui.min.css";
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc, { 
    customCssUrl: CSS_URL,
    customJs: [
        "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-bundle.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-standalone-preset.min.js"
    ]
}));

const PORT = process.env.PORT || 3000
const SERVER = "http://localhost:"
const URL = SERVER + PORT

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log("Servidor funcionando de forma correcta. URL: " + URL)
    })
}

conn.authenticate()
    .then(() => {
        return conn.sync()
    })
    .then(() => console.log("Conexión establecida..."))
    .catch((error) => console.log(error))

export default app;
