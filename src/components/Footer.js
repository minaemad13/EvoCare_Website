const Footer = () => {
    return (  






<footer class="w-100 py-4 px-5 flex-shrink-0 content1">
    <div class="container py-4">
        <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
                <h5 class="">About US</h5>
                <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <span><img src={require('../resources/logo.png')} alt=""  class="d-inline-block img-responsive"/> </span>
                <span>Evo</span><span style={{color:'#efb533'}}>Care</span>
                {/* <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">Bootstrapious.com</a></p> */}
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Quick links</h5>
                <ul class="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Quick links</h5>
                <ul class="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-6">
                <h6 class="text-white mb-3">Message</h6>
                {/* <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p> */}
        <form action="post">
                    <div class="input-group pe-5">
                    <div class="mb-2">
  {/* <label for="exampleFormControlInput1" class="form-label">Your name</label> */}
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
</div>
<div class="">
  {/* <label for="exampleFormControlTextarea1" class="form-label">Examp</label> */}
  <textarea class="form-control mb-2" id="exampleFormControlTextarea1" rows="3" placeholder='Leave us message'></textarea>
  <button className='btn btn-dark'>Send</button>
</div>

     
</div>
                </form>
            </div>
        </div>
    </div>
</footer>


    
        

    
    
    
    
    
);
}
 
export default Footer;