import About from "@/components/about"

export const metadata = {
  title: "Home Page",
  description: "This is the home page of my website",
}
const HomePage = () => {

  return (
    <main className="max-w-5xl mx-auto">
      <About />
    </main>
  )
}

export default HomePage