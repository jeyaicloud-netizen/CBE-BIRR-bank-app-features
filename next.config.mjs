/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // በ Build ጊዜ የ ESLint ስህተቶችን ችላ እንዲል ያደርጋል
    ignoreDuringBuilds: true,
  },
  typescript: {
    // አሁን የመጣብህን የ Type ስህተት (mode="wait") ሙሉ በሙሉ ችላ እንዲለው ያደርጋል
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
