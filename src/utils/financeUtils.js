


// calculate total income

export const calculateTotalIncome=(income=[])=>{
    return income.reduce((total,item)=>{
        return total+(Number(item.amount) || 0)
    },0)
}

// calculate total expense

export const calculateTotalExpenses=(expenses=[])=>{
    return expenses.reduce((total,item)=>{
        return total+(Number(item.amount) || 0)
    },0)
}

// total balance

export const calculateBalance=(income=[],expenses=[])=>{
    const totalIncome=calculateTotalIncome(income);
    const totalExpenses=calculateTotalExpenses(expenses)
    return totalIncome-totalExpenses;
}


//Filter Current Month Transactions
export const getCurrentMonthTransactions = (transactions = []) => {
  const today = new Date();

  return transactions.filter((item) => {
    const date = new Date(item.date);

    return (
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  });
};


// Calculate Current Month Income
export const calculateCurrentMonthIncome = (income = []) => {
  const monthlyIncome = getCurrentMonthTransactions(income);

  return calculateTotalIncome(monthlyIncome);
};


// Calculate Current Month Expenses
export const calculateCurrentMonthExpenses = (expenses = []) => {
  const monthlyExpenses = getCurrentMonthTransactions(expenses);

  return calculateTotalExpenses(monthlyExpenses);
};


// Calculate Current Month Balance
export const calculateCurrentMonthBalance = (income = [], expenses = []) => {
  return calculateCurrentMonthIncome(income) -
    calculateCurrentMonthExpenses(expenses);
};

// Calculate Today's Expenses
export const calculateTodayExpenses = (expenses = []) => {
  const today = new Date();

  return expenses
    .filter((item) => {
      const date = new Date(item.date);

      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    })
    .reduce((total, item) => total + (Number(item.amount) || 0), 0);
};