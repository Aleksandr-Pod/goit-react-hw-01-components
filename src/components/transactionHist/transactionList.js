import TransactionHeader from "./transactionHeader";
import TransactionItem from "./transactionItem";
import PropTypes from 'prop-types';

export default function TransactionList({ transactions }) {
    return (
        <table className="transactionHistory">
            <TransactionHeader />
            {transactions.map(item => <TransactionItem type={item.type} amount={item.amount} currency={item.currency} key={item.id} />)}

        </table>
    )
}
TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired}))
}