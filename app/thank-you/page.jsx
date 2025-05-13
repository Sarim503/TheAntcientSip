import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your order has been placed successfully.
      </p>
      <Link href="/" legacyBehavior>
        <a className="text-blue-600 underline">Go back to Home</a>
      </Link>
    </div>
  );
}
