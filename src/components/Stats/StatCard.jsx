function StatCard({ lefticon,title, amount, text, icon ,iconColor,bgColor}) {
  return (
    <div className="rounded-xl border bg-white p-3">

      <div className="flex items-start justify-between">
        {
                  lefticon&&( <div className={`rounded-xl ${iconColor} ${bgColor} p-3`}>
          {lefticon}
        </div>
        )}

        <div>

          <p className={`text-sm ${iconColor}`}>
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {amount}
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            ↗ {text}
          </p>

        </div>

        <div className={`rounded-xl ${iconColor} ${bgColor} p-3`}>
          {icon}
        </div>

      </div>

    </div>
  )
}

export default StatCard