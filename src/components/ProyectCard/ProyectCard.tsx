function ProyectCard({ proyect }: { proyect: any }) {
  return (
    <div className="h-full px-3 py-6 border border-gray-700 rounded-lg md:p-6 bg-primary-900 hover:bg-primary-700 bg-opacity-70">
      <div className="relative overflow-hidden rounded-md mb-6">
        <img
          width={1920}
          height={1080}
          className="object-cover object-center h-auto mx-auto rounded scale-[1.01] hover:scale-[1.18] ease-in-out transition-all"
          src={proyect.img}
          alt={proyect.name}
        />
      </div>
      <div className="">
        <div className="flex items-center justify-between w-full mb-3">
          <h2 className="text-lg font-medium text-white title-font">
            {proyect.name}
          </h2>
          <div className="flex gap-2">
            {proyect.link && (
              <a
                aria-label="View deploy"
                href={proyect.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-4 py-2 text-lg text-white border border-gray-500 rounded bg-primary-700 focus:outline-none hover:border-gray-600 hover:bg-primary-800"
              >
                Demo
              </a>
            )}
            {proyect.repo && (
              <a
                aria-label="View repo"
                href={proyect.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-4 py-2 text-lg text-white border border-gray-500 rounded bg-primary-700 focus:outline-none hover:border-gray-600 hover:bg-primary-800"
              >
                Repo
              </a>
            )}
          </div>
        </div>

        <div className="h-full mb-5 text-base leading-relaxed">
          {proyect.description}
        </div>
        <div className="flex flex-wrap gap-2">
          {proyect.tecnologies.map((tech: any, i: number) => (
            <div
              key={i}
              className="p-1 text-xs tracking-widest uppercase rounded bg-secondary text-primary-500"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProyectCard
