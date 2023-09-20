import { useState } from "react";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(ev) {
    ev.preventDefault();
    await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
  }
  return (
    <section className="container flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full rounded-lg border-2 border-slate-200">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl text-center">
              <span className="text-blue-500">Y</span>
              <span className="text-red-500">O</span>
              <span className="text-yellow-500">O</span>
              <span className="text-green-500">P</span>
              <span className="text-red-500">I</span>
            </h1>
            <h3 className="text-3xl text-center">
              <span className="text-white">_____</span>
              Créer un compte Yoopi
              <span className="text-white">_____</span>
            </h3>
            <form className="space-y-4 md:space-y-6" onSubmit={register}>
              <div>
                <label htmlFor="email" className="text-zinc-400">
                  Votre mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  value={username}
                  onChange={(ev) => setUsername(ev.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                ></input>
              </div>
              <div>
                <label htmlFor="password" className="text-zinc-400">
                  Votre mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                ></input>
              </div>
              <div>
                <label htmlFor="password" className="text-zinc-400">
                  confirmation du mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                ></input>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    ></input>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      J'accepte les{" "}
                      <span className="text-blue-600 hover:underline">
                        <a href=" ">termes et conditions</a>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-slate-100 p-3 rounded-md hover:bg-green-500"
                >
                  créer un compte
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
