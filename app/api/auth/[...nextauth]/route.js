import axios from "axios"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials:{},

            async authorize(credentials) {
                try {
                    const response = await axios.post(`${process.env.API_URL}/auth/login`, credentials)
                    console.log(response);
                } catch (error) {

                }
            },
        })
    ],
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/'
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}