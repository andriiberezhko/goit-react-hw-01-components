import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
    return  <section className="statistics">
        { title && <h2 className="title">{title}</h2>}
        
        <ul>
             {stats.map( item => (
             <li className="item" key={item.id}>
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