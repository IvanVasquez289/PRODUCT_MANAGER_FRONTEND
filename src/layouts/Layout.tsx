import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="bg-slate-800">
        <div className="mx-auto max-w-6xl py-10">
          <h1 className="text-4xl text-white font-extrabold">
            Administrador de productos
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto mt-10 p-10 bg-white shadow-md">
        <Outlet />
      </main>
    </>
  );
}
