export const Login = () => {
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
              <span className="text-white">__________</span>Connexion
              <span className="text-white">__________</span>
            </h3>
            <p className="text-center">Accéder à Yoopi</p>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="votre-mail@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                ></input>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                ></input>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center">
                  <a
                    href=" "
                    className="text-sm font-medium text-blue-800 hover:underline"
                  >
                    mot de passe oublié
                  </a>
                </div>
              </div>
              <div class="flex flex-row">
                <div class="basis-1/2 flex justify-start">
                    <a
                      href="/register"
                      className="bg-green-500 text-slate-100 p-3 rounded-md hover:bg-yellow-500"
                    >
                      créer un compte
                    </a>
                </div>
                <div class="basis-1/2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-slate-100 p-3 rounded-md hover:bg-blue-900"
                  >
                    Se connecter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
