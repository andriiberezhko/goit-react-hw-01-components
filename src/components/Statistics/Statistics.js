import PropTypes from "prop-types";
import s from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
    return  <section className={s.statistics}>
        { title && <h2 className={s.title}>{title}</h2>}
        
        <ul className = {s.ul}>
             {stats.map( item => (
             <li className={s.item} style = {{backgroundColor: getRandomHexColor()}} key={item.id}>
                 <span className="label">{item.label}</span>
                 <span className="percentage">{item.percentage}</span>
             </li>
            ))}
        </ul>  
    </section>
}

export default Statistics

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}