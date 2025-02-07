import Link from "next/link";

export default function Home() {

  return (
    <main>
         <div className="bg-white">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  NextJS Boilerplate
                  <br />
                  Lorem ipsum dolor sit amet!
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                  commodo do ea.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/register"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                   Sign up
                  </Link>
                  <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                    Login <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </main>
  );
}
