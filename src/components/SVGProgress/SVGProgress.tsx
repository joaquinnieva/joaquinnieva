const SVGProgess = ({
  progress,
  image,
  name,
}: {
  progress: any
  image: any
  name: any
}) => {
  return (
    <div className="p-2 border border-gray-700 rounded select-none lg:p-4 bg-primary-700 hover:bg-primary-500">
      <div className="flex items-center gap-1">
        <img width={40} height={40} className="w-10" src={image} alt="skill" />
        <span className=""> {name} </span>
      </div>

      <div className="flex items-center justify-center gap-3">
        <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 _ring">
          <div
            className="bg-secondary h-1.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className=""> {progress}% </p>
      </div>
    </div>
  )
}

export default SVGProgess
