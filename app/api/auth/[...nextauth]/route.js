import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials:{},

            async authorize(credentials) {
                const { email, password } = credentials

                try {

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