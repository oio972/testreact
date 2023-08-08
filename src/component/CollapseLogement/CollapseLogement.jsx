import { useState } from 'react';
import './collapseLogement.css';
import arrow_down from './arrow_down.png';
const CollapseLogement = ({ title, content }) => {
    const [show, setShow] = useState(false);
    
    return (
        
        <div className="collapse-content">
            <button className="accordion" onClick={() => setShow(!show)}>
                {title}
                <img className={show ? 'arrow arrow_down' : 'arrow arrow_up'} src={arrow_down} alt={content.title} />
            </button>
            
            {show && (
                <div className="panel">
                    {Array.isArray(content) ? 
                    (
                        <ul className="list-equipements">
                            {content.map((equipment, keyindex) => (
                                <li key={keyindex}>{equipment}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="collapse-text">{content}</p>
                    )     
                }
                </div>
            )}
        </div>
    )   
};
export default CollapseLogement
        