export const Articles = () => {
  return (
    <section>
      <div className="grid grid-rows-3 grid-flow-col gap-4 w-full border-y-4 border-slate-200 rounded-md p-2 mt-10 mb-10">
        <div className="row-span-3">
          <img src="img/cpu.jpg" alt="computer" />
        </div>
        <div className="col-span-2 text-2xl text-zinc-600 text-center">
          Titre d'article
          <p className="flex justify-start text-sm"> auteur & date </p>
        </div>
        <div className="row-span-2 text-zinc-800 text-center">
          Lorem ipsum dolor sit amet consectetur adipisici
          <p>
            ng elit. Vero explicabo unde et sequi porro dolorem, debitis modi
            quos quo amet? Ullam ratione vel, maxime sed repudiandae dicta
            assumenda accusantium. Omnis?
          </p>
        </div>
      </div>
    </section>
  );
};
