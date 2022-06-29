import PropTypes from "prop-types";
import s from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
    return  <section className={s.statistics}>
        { title && <h2 className={s.title}>{title}</h2>}
        
        <ul className = {s.ul}>
             {stats.map(( {id, label, percentage}) => (
             <li className={s.item} style = {{backgroundColor: getRandomHexColor()}} key={id}>
                 <span className="label">{label}</span>
                 <span className="percentage">{percentage}</span>
             </li>
            ))}
        </ul>  
    </section>
}

export default Statistics

Statistics.propTypes = {
    title: PropTypes.string,
    stats:PropTypes.array,
    id: PropTypes.string,
   label: PropTypes.string,
    percentage: PropTypes.number,
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}