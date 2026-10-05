
import { Download, Trash2,CloudDownload } from "lucide-react";
import { Context } from "@/Context/Context";
import { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
const Datamanagement = () => {
  const { income, expenses,setIncome,setExpenses } = useContext(Context);
  const [open,setOpen]=useState(false);
const handleExport = () => {
  const data = [
...income.map((item) => ({
  Type: "Income",
  Name: item.source,
  Amount: item.amount,
  Date: new Date(item.date).toLocaleDateString("en-IN"),
})),

...expenses.map((item) => ({
  Type: "Expense",
  Name: item.title,
  Amount: item.amount,
  Date: new Date(item.date).toLocaleDateString("en-IN"),
})),
  ];


  const headers = ["Type", "Name", "Amount", "Date"];

  const csvRows = [
    headers.join(","),
    ...data.map((item) =>
      [
        item.Type,
        item.Name,
        item.Amount,
        item.Date,
      ].join(",")
    ),
  ];

  const csvContent = csvRows.join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "spendwise-data.csv";

  link.click();

  URL.revokeObjectURL(url);
};

const handleClearData = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:5000/auth/clear-data", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    setIncome([]);
    setExpenses([]);
  }
};
  return (
<div className="mt-5 w-full rounded-lg border border-gray-200 bg-white px-3 py-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">

  {/* Header */}
  <div>
    <p className="text-xl font-bold">
      Data Management
    </p>

    <p className="text-sm text-gray-500">
      Manage your application data
    </p>
  </div>


  {/* Export Data */}
  <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    {/* Left */}
    <div className="flex min-w-0 items-center gap-3 xl:gap-5">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-200">
        <CloudDownload size={28} />
      </div>

      <div className="min-w-0">
        <p className="font-bold">
          Export Data
        </p>

        <p className="text-sm text-gray-400">
          Download your income and expense data as CSV file
        </p>
      </div>

    </div>


    {/* Button */}
    <div className="w-full md:w-auto">

<button
  type="button"
  onClick={handleExport}
  className="group inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 text-sm font-medium text-white shadow-md shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 md:w-36"
>
  <Download
    size={16}
    className="transition-transform duration-200 group-hover:translate-y-0.5"
  />
  Export
</button>

    </div>

  </div>


  {/* Clear All Data */}
  <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    {/* Left */}
    <div className="flex min-w-0 items-center gap-3 xl:gap-5">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-200">
        <Trash2 size={24} />
      </div>

      <div className="min-w-0">
        <p className="font-bold">
          Clear All Data
        </p>

        <p className="text-sm text-gray-400">
          This will permanently delete all your income,
          expenses, categories and Transactions
        </p>
      </div>

    </div>


    {/* Button */}
    <div className="w-full md:w-auto">

<button
  type="button"
  onClick={() => setOpen(true)}
  className="group inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-5 text-sm font-medium text-red-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 md:w-36"
>
  <Trash2
    size={16}
    className="transition-transform duration-200 group-hover:rotate-12"
  />
  Clear Data
</button>

    </div>

  </div>


  {/* Dialog */}
  <Dialog open={open} onOpenChange={setOpen}>

    <DialogContent>

      <DialogHeader>
        <DialogTitle>
          Are you sure?
        </DialogTitle>

        <DialogDescription>
          This will permanently delete all your income and expenses
        </DialogDescription>
      </DialogHeader>

      <div className="flex justify-end gap-3 px-2 pt-4">

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleClearData}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Clear Data
        </button>

      </div>

    </DialogContent>

  </Dialog>

</div>
  )
}

export default Datamanagement