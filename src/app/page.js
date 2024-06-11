import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h1>home page</h1>
        <Image
          src="/image/telur dadar.jpeg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
