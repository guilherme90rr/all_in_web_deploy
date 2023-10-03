import NavBar from "@/components/NavBar";



export default async function Home() {

  return (
    <>
      <NavBar active={"documentos"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <h2 className="text-2xl font-bold">Documentos</h2>

        <div id="data" className="text-slate-300 m-1">
          <h1>teste</h1>
        </div>
      </main>
    </>

  )
}


