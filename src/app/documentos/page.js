import NavBar from "@/components/NavBar";


async function getDocumentos(){
  const url = "http://localhost:8080/api/pages"
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
          {data.map(documentos => <DataRow page={documentos} /> )}
        </div>
      </main>
    </>

  )
}

export async function destroy(id){  
  const deleteUrl = url + "/" + id
  const options = {
      method: "DELETE"
  }
  const resp = await fetch(deleteUrl, options)
  if (resp.status !== 204) return {error: "Erro ao apagar seu documento. " + resp.status}
  revalidatePath("/page")

}


export async function update(page){
  const updateURL = url + "/" + page.id
  const options = {
      method: "PUT",
      body: JSON.stringify(page),
      headers: {
          "Content-Type": "application/json"
      }
  }
  const resp = await fetch(updateURL, options)
  if (resp.status !== 200) return {error: "Erro ao atualizar seu documento. " + resp.status}
  revalidatePath("/")
}

