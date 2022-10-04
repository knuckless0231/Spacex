import s from "./Picarr.module.css"
import React from "react";


const Picarr = (props) =>{
return (



<div className={s.picarr}>
<div className={s.arr} >
<img className={s.arrlogos} src= {props.state.flickr_images[0]} alt="img0" />
<img className={s.arrlogos} src= {props.state.flickr_images[1]} alt="img1" />
<img className={s.arrlogos} src= {props.state.flickr_images[2]} alt="img2" />
<img className={s.arrlogos} src= {props.state.flickr_images[3]} alt="img3" />
</div>

{/* <Picturearray>
    <Picturearray.Item>
    <img className={s.arrlogos} src= {props.state.flickr_images[0]} alt="img0" />
    </Picturearray.Item>
</Picturearray>   */}

</div>



);
}



export default Picarr;