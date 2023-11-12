function ExperienceCard({ data }) {
  return (
    <div className="h-full px-3 py-6 border border-gray-700 rounded-lg md:p-6 bg-primary-900 hover:bg-primary-700 bg-opacity-70">
      <div className="relative flex items-center gap-6 mb-3 overflow-hidden rounded-md">
        <img
          width={1920}
          height={1080}
          className="object-center w-12 h-auto rounded "
          src={data.img}
          alt=""
        />
        <h1 className="text-white">{data.title}</h1>
      </div>
      <div className="">
        <div className="flex items-center justify-between w-full mb-2">
          <h2 className="text-lg font-medium text-white title-font">
            {data.job}
          </h2>
        </div>

        <div className="h-full mb-2 text-base leading-relaxed">{data.time}</div>
      </div>
    </div>
  )
}

export default ExperienceCard
