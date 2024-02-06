export function Title({ logo }) {
  return (
    <section className="flex flex-col items-center">
      <h1>{logo}</h1>
      <h2 className="text-lg xl:text-xl text-primary text-inter  mb-4 text-center">
        Comunidades Tech unidas por una causa
      </h2>
    </section>
  )
}
