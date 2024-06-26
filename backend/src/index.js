import express from 'express'
import connectDB from './db/index.js'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import listingRouter from './routes/listing.routes.js'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
const port = process.env.PORT

const allowedOrigins = [
    'https://real-estate-frontend-alpha.vercel.app',
    'http://localhost:5173'
];


app.use(cors({
    origin: (origin, callback) => {                         // frontend URLs
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true // Allow credentials (cookies, authorization headers, etc.) to be sent in requests
}));
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1/user', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/listing', listingRouter)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal server error"

    return res
        .status(statusCode)
        .json(
            {
                success: false,
                statusCode,
                message
            }
        )
})



connectDB()
.then( () => {
    app.listen(port, () => {
        console.log(`listen on http://localhost:${port}`)
    })
})

