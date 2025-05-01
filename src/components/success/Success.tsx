'use client'
import { useRouter } from 'next/navigation';

export default function Success() {
    const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-blue-100">
      <h1 className="text-3xl font-bold text-green-600">Success!</h1>
      <p className="text-lg text-gray-600 mt-4">
        Your message has been successfully submitted.
      </p>
      <button
        onClick={() => (router.push('/sladingpages/contactUsPage'))}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Back to Home
      </button>
    </div>
  );
}
