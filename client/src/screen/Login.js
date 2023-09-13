export const Login = () => {
  return (
    <section className="container flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full bg-slate-100 rounded-lg">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl text-zinc-600 text-center">
              Connectez-vous au <span className="text-yellow-600">blog</span>
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="text-zinc-400">
                  Votre mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
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
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Se souvenir
                    </label>
                  </div>
                </div>
                <a
                  href=" "
                  className="text-sm font-medium text-blue-800 hover:underline"
                >
                  mot de passe oublié
                </a>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-yellow-600 text-slate-100 p-3 rounded-md hover:bg-yellow-700"
                >
                  Se connecter
                </button>
              </div>
              <p className="text-sm font-light text-gray-500">
                Pas de compte ?
                <a
                  href="/register"
                  className="font-medium text-primary-600 hover:underline text-blue-800"
                >
                  {" "}
                  crée un compte
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
