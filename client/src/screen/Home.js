import { Articles } from "../components/Articles";

export const Home = () => {
  return (
    <main className="container">
      <div className="w-full p-4 text-center rounded-md">
        <h5 className="mb-2 text-3xl font-bold text-zinc-600">
          Le bonheur au travail !
        </h5>
        <p className="mb-5 text-base text-zinc-700 sm:text-lg">
          Toute nouvelle <span className="text-blue-500">start-up</span> qui
          <span className="text-green-500">révolutionne</span> la façon de{" "}
          <span className="text-red-500">travailler</span> avec des méthodes de
          <span className="text-yellow-500">management</span> jamais vues !
        </p>
      </div>
      <Articles />
      <Articles />
    </main>
  );
};
