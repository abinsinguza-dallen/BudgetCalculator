import React from "react";
import { MdSend } from "react-icons/md";



const ExpenseForm = ({charge, amount,handleCharge,handleAmount,handleSubmit,edit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">Items</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g fees"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Cost</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g.2,000"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "edit" : "submit"}
        {/* submit  */}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
