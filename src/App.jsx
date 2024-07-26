import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

    useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  
  // if (expenses.length === 0) return null;

  return (
    <div className="h-screen">
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([{ ...expense, id: expenses.length + 1 }, ...expenses])
        }
      />
      {expenses.length > 0 && (
        <>
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </>
      )}
    </div>
  );
}

export default App;
