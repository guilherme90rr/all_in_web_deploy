import NavBar from "@/components/NavBar";


async function getDocumentos(){
  const url = "http://localhost:8080/api/contas"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  if (!resp.ok) throw new Error("Não pode carregar os dados")
  return resp.json()
}

export default async function Home() {
  const data = await getDocumentos()

  return (
    <>
      <NavBar active={"documentos"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <h2 className="text-2xl font-bold">Documentos</h2>

        <div id="data" className="text-slate-300 m-1">
          {data.map(documentos => <DataRow conta={documentos} /> )}
        </div>
      </main>
    </>

  )
}
