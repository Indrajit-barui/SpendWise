
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
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] mt-5 px-3 py-5">
        <div>
            <p className="text-xl font-bold">Data Management</p>
            <p className="text-sm text-gray-500">Manage your application data</p>
        </div>

                {/* Default month */}
        <div className="mt-5 flex justify-between items-center">
            <div className="flex gap-2 xl:gap-5">
            <div className="h-12 w-12 rounded-xl bg-gray-200 flex items-center justify-center">
                <CloudDownload size={28}/>
            </div>
            <div>
            <p className="font-bold">Export Data</p>
            <p className="text-sm text-gray-400">Download your income and expense data as CSV file</p>
            </div>

            </div>

  <div>




  <button
    type="button"
    onClick={handleExport}
    className="flex h-10 w-35 items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm"
  >
     <Download size={16} />
    Export
   
  </button>

</div>
        </div>

        {/* Theme */}
        <div className="mt-5 flex justify-between items-center">
            <div className="flex gap-2 xl:gap-5">
            <div className="h-12 w-12 rounded-xl bg-gray-200 flex items-center justify-center">
                <Trash2 size={24}/>
            </div>
            <div>
            <p className="font-bold">Clear All Data</p>
            <p className="text-sm text-gray-400">This will permanently delete all your income,expenses,categories and Transactions</p>
            </div>

            </div>

  <div>



  <button
    type="button"
    onClick={()=>setOpen(true)}
    className="flex  h-10 w-35 items-center gap-2 rounded-lg border border-gray-300 bg-white px-4  "
  >
    <Trash2 size={16} />
     Clear Data
  
    
  </button>

</div>
        </div>
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This will permanently delete all your income and expenses
      </DialogDescription>
    </DialogHeader>

<div className="flex justify-end gap-3 px-2 pt-4">
  <button
    type="button"
    onClick={()=>setOpen(false)}
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