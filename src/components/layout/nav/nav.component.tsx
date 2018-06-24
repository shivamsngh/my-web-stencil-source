import { Component, Prop, Element } from '@stencil/core';


@Component({
    tag: 'my-web-nav',
    styleUrl: 'nav.component.css'
})
export class MyWebNav {

    @Prop() backgroundColor: string;
    @Prop() textColor: string;
    @Element() elem: HTMLElement;

    componentDidLoad() {
        const $navBurger = this.elem.querySelector('.navbar-burger');
        console.log("burger is", $navBurger);
        $navBurger.addEventListener('click', () => {
            const target = $navBurger.attributes.getNamedItem('data-target').value;
            console.log("target is", target);
            const $target = this.elem.querySelector(`${target}`);
            $navBurger.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        })

    }

    render() {
        const orcid = {
            anchor: { 'vertical-align': 'top' },
            img: {
                'width': '1em',
                'margin-right': '.5em'
            }
        };
        const theme = {
            'color': this.textColor,
            'background-color': this.backgroundColor
        }
        return (
            <nav id="mainNav" class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation" style={theme}>

                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div class="navbar-brand">
                    <stencil-route-link url='/'>
                        <a class="navbar-item has-text-light"><i class="fas fa-2x fa-home"></i> </a>
                    </stencil-route-link>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-toggle="collapse" data-target="#navMenu">
                        {/* <i class="fa fa-bars"></i> */}
                        <span aria-hidden="true" class="has-background-white"></span>
                        <span aria-hidden="true" class="has-background-white"></span>
                        <span aria-hidden="true" class="has-background-white"></span>
                    </a>

                </div>

                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div class="navbar-menu" id="navMenu">
                    <div class="navbar-end">
                        <a class="navbar-item" href="/#about" >About</a>
                        <a class="navbar-item" href="/#social">Social</a>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">Bucketlist</a>
                            <div class="navbar-dropdown">
                                <stencil-route-link url='/bucketlist' class="navbar-item">
                                     Rishikesh, India
                                    
                                </stencil-route-link>
                                <hr class="navbar-divider" />
                                <a href="#" class="navbar-item">Bhotekosi, Nepal</a>
                            </div>
                        </div>
                        <stencil-route-link url='/event' class="navbar-item only-on-mobile">
                        Events
                        </stencil-route-link>

                        <a class="navbar-item" href="/#portfolio">Portfolio</a>
                        <a class="navbar-item" href="/#contact">Contact</a>
                        <a class="navbar-item" href="assets/shivamsingh.pdf" target="_blank" rel="noopener">CV</a>
                        <a class="navbar-item" href="https://orcid.org/0000-0003-2918-7975" target="orcid.widget" rel="noopener noreferrer" style={orcid.anchor}><img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" style={orcid.img} alt="ORCID iD icon" />orcid.org/0000-0003-2918-7975</a>
                    </div>

                </div>
                {/* <!-- /.navbar-collapse --> */}
                {/* <!-- /.container-fluid --> */}
            </nav>
        );
    }

}