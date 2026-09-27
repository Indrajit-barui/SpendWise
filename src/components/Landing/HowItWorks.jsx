import Card1 from "../../assets/images/Card1.jpeg"
import Card2 from "../../assets/images/Card2.jpeg"
import Card3 from "../../assets/images/Card3.jpeg"



const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f7ff] px-10 py-20" id="how-it-works">

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">

        <div className="inline-flex rounded-full bg-purple-100 px-4 py-2">
          <p className="text-sm font-medium text-purple-700">
            How It Works
          </p>
        </div>

        <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900">
          Start managing your money
          <br />
          <span className="text-purple-600">
            in 3 simple steps
          </span>
        </h2>

        <p className="mt-4 text-lg text-gray-500">
          Get started in minutes and take control of your finances.
        </p>

<div className="mx-auto mt-12 grid max-w-[1400px] grid-cols-1 gap-4 md:grid-cols-3">
<div className="relative rounded-3xl border border-purple-100 bg-white p-4 shadow-sm">

  {/* Step number */}
  <div className="absolute -left-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
    01
  </div>

  {/* Visual area */}
   <div className="h-52 rounded-2xl bg-purple-50 p-4">
    <img
      src={Card1}
      alt="Track your money"
      className="h-full w-full object-contain"
    />
  </div>

  {/* Card content */}
  <div className="px-2 pb-2 pt-5">

    <h3 className="text-2xl font-bold text-slate-900">
      Create your account
    </h3>

    <p className="mt-2 text-base leading-6 text-gray-500">
      Sign up for SpendWise and get started in just a few seconds.
    </p>

  </div>

</div>

<div className="relative rounded-3xl border border-purple-100 bg-white p-4 shadow-sm">

  {/* Step number */}
  <div className="absolute -left-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
    02
  </div>

  {/* Visual area */}
  <div className="h-52 rounded-2xl bg-purple-50 p-4">
    <img
      src={Card2}
      alt="Track your money"
      className="h-full w-full object-contain"
    />
  </div>

  {/* Card content */}
  <div className="px-2 pb-2 pt-5">

    <h3 className="text-2xl font-bold text-slate-900">
      Track your money
    </h3>

    <p className="mt-2 text-base leading-6 text-gray-500">
      Add your income and expenses to keep your finances organized.
    </p>

  </div>

</div>

<div className="relative rounded-3xl border border-purple-100 bg-white p-4 shadow-sm">

  {/* Step number */}
  <div className="absolute -left-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
    03
  </div>

  {/* Visual area */}
  <div className="h-52 rounded-2xl bg-purple-50 p-4">
    <img
      src={Card3}
      alt="Understand your finances"
      className="h-full w-full object-contain"
    />
  </div>

  {/* Card content */}
  <div className="px-2 pb-2 pt-5">

    <h3 className="text-2xl font-bold text-slate-900">
      Understand your finances
    </h3>

    <p className="mt-2 text-base leading-6 text-gray-500">
      See your spending through charts and insights from your dashboard.
    </p>

  </div>

</div>


</div>
      </div>

    </section>
  );
};

export default HowItWorks;