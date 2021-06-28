import jwt from 'jsonwebtoken'

export const checkAuth = (req, res, next) => {
    try {
        console.log(req)
        const token = req.headers.cookie.split('=')[1]
        const decoded = jwt.verify(token, 'secrete')
        req.userData = decoded
        next()
    } catch (error) {
        res.status(401).json({
            message: 'Auth failed'
        })
    }
}