export function Title({ logo }) {
  return (
    <section className="flex flex-col items-center">
      <h1>{logo}</h1>
      <h2 className="text-xl xl:text-2xl text-primary text-inter mt-4 mb-6 text-center">
        Comunidades Tech unidas por una causa
      </h2>
    </section>
  )
}
