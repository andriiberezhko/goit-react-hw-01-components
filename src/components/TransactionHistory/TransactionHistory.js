import PropTypes from "prop-types";
import s from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
    return <table className={s.transactionHistory}>
  <thead className={s.thead}>
    <tr>
      <th className={s.th}>Type</th>
      <th className={s.th}>Amount</th>
      <th className={s.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => (<tr key={item.id}>
      <td className={s.th}>{item.type}</td>
      <td className={s.th}>{item.amount}</td>
      <td className={s.th}>{item.currency}</td>
    </tr>
    ))}
    
  </tbody>
</table>
}

export default TransactionHistory

TransactionHistory.propTypes = {
    items: PropTypes.array,
}