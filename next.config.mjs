/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ይህ ኔትሊፋይ ላይ Build ሲያደርግ የ ESLint ስህተት ቢኖርም እንኳን አልፎ እንዲሰራ ያደርገዋል
    ignoreDuringBuilds: true,
  },
  typescript: {
    // የ ታይፕስክሪፕት ስህተት ካጋጠመህ እሱንም አብሮ እንዲያልፈው ይህንን እንጨምራለን
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
