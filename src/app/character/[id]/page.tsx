import { Character } from "../../types";
import { Footer } from "../../components/footer";
import { getDataById } from "@/app/api";

export default async function Character({
  params: { id }
}: {
  params: { id: number };
}) {
  const data = await getDataById(id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Nombre: {data.name.first}</h1>
      <img src={data.images.main} alt="Picture of the author" />
      <Footer id={id} />
    </main>
  );
}
