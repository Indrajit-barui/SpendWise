function NavItem({ icon, text, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-3
        p-3
        rounded-lg
        cursor-pointer

        ${
          active
            ? "bg-indigo-50 text-indigo-600"
            : "text-gray-600 hover:bg-gray-100"
        }
      `}
    >
      {icon}

      <span className="font-medium">
        {text}
      </span>
    </div>
  )
}

export default NavItem;