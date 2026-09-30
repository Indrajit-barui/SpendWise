import { WalletCards } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        
        <div className="animate-bounce">
          <WalletCards size={48} className="text-purple-600" />
        </div>

        <h1 className="mt-4 text-2xl font-bold">
          SpendWise
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your money smarter
        </p>

        <div className="mt-6 h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-purple-600" />
        
      </div>
    </div>
  );
};

export default LoadingScreen;