/** @type {import('next').NextConfig} */
const nextConfig = {
    //Configure here in order to use external images in the web
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:"images.pexels.com"
            },

        ]
    }
}

module.exports = nextConfig
