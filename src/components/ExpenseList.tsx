
interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <div className="container-fluid px-0">
        <div className="table-responsive">
            <table className="table table-bordered table-sm text-center">
                <thead className="table-light">
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map(expense => <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(expense.id)} >
                                <span className="d-none d-sm-inline">Delete</span>
                                <span className="d-inline d-sm-none">x</span>
                            </button>
                        </td>
                    </tr>)}
                </tbody>

                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>    
        </div>
    </div>
  )
}

export default ExpenseList