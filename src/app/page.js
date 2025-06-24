import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-full">
      <h1 className="text-3xl font-bold text-center mt-10">
        THERE IS NO HOME PAGE GO TO ARTICLE PAGE
      </h1>

      <Link
        href="/article"
        className="block mt-6 text-center text-lg text-blue-500 hover:text-blue-700 underline"
      >
        Article
      </Link>
    </div>
  );
}
