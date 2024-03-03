// import { SMALL_IMG_COVER_BASE_URL } from "../../config"
// import './style.css';

// const Card = ({data,onClick}) =>{
//     const handleClick = () => {
//         onClick(data);
//     };


// const Card  = ({item,onClick}) =>{
//     return(
//         <div className="card" onClick={handleClick}>
//           <div className="card-list">
//             <img className="card-img" src={SMALL_IMG_COVER_BASE_URL + item.poster_path}  alt=""/>            
//               <div className="card-info">
//                   <span>{item.title}</span>
//                   <p>{item.release_date}</p>
//               </div>
//           </div>
//         </div>

//     )
//     }

// export default Card;


import { SMALL_IMG_COVER_BASE_URL } from "../../config"
import './style.css'

const Card = ({item,onClick}) =>{
    console.log(item)
    const handleClick = () => {
        onClick(item);
    };
    return(
        <div className="card" onClick={handleClick}>
            <img className="card-img" src={SMALL_IMG_COVER_BASE_URL + item.poster_path}  alt={item.title}/>
            <div className="card-info">
                <span>{item.title}</span>
                <p>{item.release_date}</p>
            </div>
        </div>
    )
}
export default Card;