import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mapa Sensorial TEA",
  description:
    "Um mapa feito para auxiliar pessoas com TEA sobre lugares e ambientes mais confotáveis em questão de Som, Iluminação e Odor",
};
export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 flex *:items-center justify-center">
        Mapa Sensorial TEA
      </h1>
    </div>
  );
}
