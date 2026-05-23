import './design7.css'
function Design7(){
    return(
<>
  <div className="container">
    <div className="nav">
<div className="logo"><h2>LOGO</h2></div>

<div className="navbar">
    <a href = '#'>Home</a>
     <a href = '#'>Interface</a>
      <a href = '#'>Image 5/10-wir</a>
        <a href = '#'>Tips</a>
        <a href = '#'>Summary</a>
        <a href = '#'>Sponsorship</a>
        <a href = '#'>Contact</a>
         </div>
 </div>
<div className="box1">
        <div className="adspace"><h2>Ad <br></br>Space</h2> </div>
        <div className="rotater"><h2>Rotator</h2></div>
    </div>
  
    <div className="child-section">

        {[1,2,3,4,5,6,7,8].map((item) => (
          <div className="card" key={item}>
            <div className="image-box"></div>
            <p>My Child Bio</p>
          </div>
        ))}

      </div>
        
    
      
     
        
      
<div className="box3">
    <div className="boxes">
        <div className="b1"></div>
        <div className="b2"></div>
        <div className="b3"></div>
        <div className="b4"></div>
        <div className="b5"></div>
    </div>
    <div className="text"><h5>Pics + Mini Bios of Children</h5></div>
</div>


</div>



</>

    )
}

export default Design7