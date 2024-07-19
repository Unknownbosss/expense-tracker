import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is Required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(Categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

function ExpenseForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <> 
    <h1 className="text-4xl m-auto mb-4 font-bold font-[Tahoma]">Expense Tracker</h1>
    <form
      className="mb-4 text-2xl"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="">
        <label htmlFor="description" className="">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="outline-none rounded-md px-4 py-2 w-full block mt-1 text-gray-700 text-lg bg-white hover:bg-gray-200 focus:ring-2 focus:ring-blue-500"
        />
        {errors.description && (
          <p className="text-red-500 text-base mb-2">
            {errors.description.message}
          </p>
        )}
      </div>
      <div className="">
        <label htmlFor="amount" className="">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="outline-none rounded-md px-4 py-2 w-full block mt-1 text-gray-700 text-lg bg-white hover:bg-gray-200 focus:ring-2 focus:ring-blue-500"
        />
        {errors?.amount && (
          <p className="text-red-500 text-base mb-2">{errors.amount.message}</p>
        )}
      </div>
      <div className="mt-4">
        <label htmlFor="category">Category</label>
        <select
          {...register("category")}
          id="category"
          className="rounded-md px-4 py-2 block w-full text-gray-700 text-lg bg-white hover:border-gray-200 focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select</option>
          {Categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-base mb-2">
            {errors.category.message}
          </p>
        )}
      </div>

      <button className="bg-blue-500 duration-200 hover:bg-blue-700 px-4 py-2 mt-4 rounded-md border-none cursor-pointer">
        Submit
      </button>
    </form></>
  );
}

export default ExpenseForm;
