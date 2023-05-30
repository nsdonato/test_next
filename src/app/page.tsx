import { getDataById } from "./api";
import { Footer } from "./components/footer";

export default async function Home() {
  const data = await getDataById(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Nombre: {data.name.first}</h1>
      <img src={data.images.main} alt="Picture of the author" />
      <Footer id={1} />
    </main>
  );
}
