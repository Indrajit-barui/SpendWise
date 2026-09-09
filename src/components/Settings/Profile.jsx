import { Camera } from "lucide-react"

const Profile = () => {
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] ">
       
      {/* Profile Card */}
<div className="rounded-xl border border-gray-200 bg-white p-3">

  {/* Heading */}
  <div>
    <h2 className="text-xl font-bold">Profile</h2>
    <p className="text-gray-500">Your account information</p>
  </div>

  {/* Profile content */}
  <div className="mt-5 flex flex-col gap-6 xl:flex-row">

    {/* Avatar */}
    <div className="relative h-28 w-28 shrink-0">
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-purple-100 text-5xl font-semibold text-purple-600">
        S
      </div>

      <button className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-slate-600 text-white">
        <Camera size={18} />
      </button>
    </div>

    
    <div className="grid w-full xl:w-1/2 gap-4 ">

      {/* Name */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Name
        </label>

        <input
          type="text"
          value="Student"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>

        <input
          type="email"
          value="student@example.com"
          disabled
          className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-3 text-gray-500 outline-none"
        />
      </div>

    </div>

  </div>
</div>

    </div>
  )
}

export default Profile