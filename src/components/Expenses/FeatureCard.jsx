

const FeatureCard = ({icon,title,description,className,bg_color}) => {
  return (
<div
      className={`rounded-xl p-5 flex items-center gap-4 ${className} `}
    >
      <div className={`w-12 h-12 rounded-full ${bg_color} flex items-center justify-center shrink-0 `}>
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">
          {title}
        </h4>

        <p className="text-sm text-slate-500 mt-1">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard