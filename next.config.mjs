/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // https://lh3.googleusercontent.com/a/ACg8ocIxEk7JngCxtF7pHgoSgNePr8UpzuWR1j04v13_Ie20_A=s96-c
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
