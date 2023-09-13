import { Articles } from "../components/Articles";

export const Home = () => {
  return (
    <main className="container">
      <div className="w-full p-4 text-center rounded-md">
        <h5 className="mb-2 text-3xl font-bold text-zinc-600">
          Bienvenue sur <span> Yoopi !</span>
        </h5>
        <p className="mb-5 text-base text-zinc-700 sm:text-lg">
          Découvrez l'univers passionnant du{" "}
          <span className="text-yellow-600">JavaScript</span> : Partagez vos
          connaissances, publiez vos{" "}
          <span className="text-blue-800">articles</span> et plongez dans le
          cœur même de ce langage de programmation captivant ! Bienvenue sur
          notre{" "}
          <span className="underline decoration-blue-800">
            blog collaboratif
          </span>{" "}
          dédié au monde en perpétuelle évolution du{" "}
          <span className="text-yellow-600">JavaScript</span>.
        </p>
      </div>
      <Articles />
      <Articles />
    </main>
  );
};
