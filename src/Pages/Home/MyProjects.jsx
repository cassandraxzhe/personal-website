import ProjectPortfolio from "../../components/ProjectPortfolio.tsx"

export default function MyProjects() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
      </div>
      <ProjectPortfolio /> 
    </main>
  )
}