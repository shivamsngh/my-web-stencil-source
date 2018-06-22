import { Component } from '@stencil/core';


@Component({
    tag: 'my-web-nav',
    styleUrl: 'nav.component.css'
})
export class MyWebNav {


    render() {
        const orcid = {
            anchor: { 'vertical-align': 'top' },
            img: {
                'width:1em;margin-right': '.5em'
            }
        };
        return (
            <nav id="mainNav" class="navbar navbar-default navbar-fixed-top" >
                <div class="container-fluid">

                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span> Menu
          <i class="fa fa-bars"></i>
                        </button>
                        <a class="navbar-brand page-scroll" >Home</a>
                    </div>

                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a class="page-scroll" href="#about" >About</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#services">Social</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a id="bucketDrop" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Bucketlist</a>
                                <ul class="dropdown-menu" aria-labelledby="bucketDrop">
                                    <li><a href="#" class="active" >Rishikesh, India</a></li>
                                    <li><a href="#">Bhotekosi, Nepal</a></li>
                                </ul>
                            </li>
                            <li>
                                <a class="page-scroll" href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#contact">Contact</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="assets/shivamsingh.pdf" target="_blank" rel="noopener">CV</a>
                            </li>
                            <li>
                                <a href="https://orcid.org/0000-0003-2918-7975" target="orcid.widget" rel="noopener noreferrer" style={orcid.anchor}><img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" style={orcid.img} alt="ORCID iD icon" />orcid.org/0000-0003-2918-7975</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- /.navbar-collapse --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
            </nav>
        );
    }

}