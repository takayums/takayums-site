import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <div className="container mx-auto px-4">
          <h1>Hello Yums</h1>
        </div>
      </main>
    </>
  );
}
