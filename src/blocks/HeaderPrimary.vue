<template>
    <transition>
        <header id="header" :class="'site-header animated ' + slideInDownClass">
            <div class="wrapper">
                <div class="header-content d-flex justify-content-between">
                    <div class="header-left align-self-center">
                        <header-logo />
                    </div>

                    <div class="header-right d-flex justify-content-end">
                        <div class="d-flex align-items-center">
                            <div class="menu">
                                <nav class="menu-primary">
                                    <ul class="nav">
                                        <li class="nav-item" v-bind:class="menuElements[0]">
                                           <drop-down
                                                :title="{name:'Home',link:'/'}" 
                                            />
                                        </li>

                                        <li class="nav-item" v-bind:class="menuElements[1]">
                                            <drop-down 
                                                :title="{name:'About Us',link:'./#about-us'}" 
                                                :menuData="[{name:'Vision/Mission',link:'./#about-us'},
                                                            {name:'Values',link:'./#about-us'},
                                                            {name:'Team',link:'./#team-members'}   ]"
                                            />
                                        </li>

                                        <li class="nav-item" v-bind:class="menuElements[2]">
                                            <drop-down 
                                                :title="{name:'Services',link:''}" 
                                                :menuData="[{name:'Agile & DevOps',link:''},
                                                            {name:'Bussiness & Applications',link:''},
                                                            {name:'AI & Automation',link:''},
                                                            {name:'Website Development',link:''},
                                                            {name:'Cloud',link:''},
                                                            {name:'Data Analytics',link:''},
                                                            {name:'Q&A Testing',link:''},
                                                            {name:'UI/UX Design',link:''},
                                                            {name:'Software Development',link:''}   ]"
                                            />
                                        </li>

                                        <li class="nav-item" v-bind:class="menuElements[3]">
                                            Industries
                                        </li>

                                        <li class="nav-item" v-bind:class="menuElements[4]">
                                           <drop-down 
                                                :title="{name:'Resources',link:'/'}" 
                                                :menuData="[{name:'Case Study',link:'/'},
                                                            {name:'Blogs',link:'/news'},
                                                            {name:'Webinar',link:'/'}   ]"
                                            />
                                        </li>

                                        <li class="nav-item" v-bind:class="menuElements[6]">
                                            <drop-down :title="{name:'Contacts',link:'./#contacts'}" 
                                            />
                                        </li>
                                    </ul>

                                </nav>
                            </div>
                            <menu-modal-button-component button-class="adv-light mr-0" btn-outline="btn-outline-tertiary" />
                            <menu-modal-button-component button-class="adv-dark" btn-outline="btn-secondary btn-hover-main-secondary" />                           
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </transition>
</template>

<script>
    import HeaderLogo from './HeaderLogo';
    import Logo from './Logo';
    import HeaderMenu from './General/HeaderMenu';
    import MenuModalButton from '../components/Button/MenuModalButton';
    import SearchModalButton from '../components/Button/SearchModalButton';
    import Dropdown from '../components/Dropdown/Dropdown';

    export default {
        name: 'Header',
        components: {
            'header-logo': HeaderLogo,
            'header-menu': HeaderMenu,
            'search-modal-button-component': SearchModalButton,
            'menu-modal-button-component': MenuModalButton,
            'logo-block': Logo,
            'drop-down' : Dropdown
        },
        data() {
            return {
                scrollPosition: null,
                headerFixed: false,
                slideInDownClass: '',
                pushed: false,
                menuElements: ['', '', '', '', '', '', '']
            }
        },
        props: ['logoColor'],
        methods: {
            updateScroll() {
                this.scrollPosition = window.scrollY;
                let el              = document.querySelector( '#main > .content > .clearfix > *:nth-child(2)' ).getBoundingClientRect();
                let fromTop         = -1;

                if ( document.querySelector( '.service-items' ) ) {
                    fromTop = 67;
                }

                if ( window.pageYOffset - ( el.top + window.scrollY ) > fromTop ) {
                    document.querySelector( '.header-fixed-true' ).classList.add( 'header-fixed' );
                    this.headerFixed      = true;
                    this.slideInDownClass = 'slideInDown'
                } else {
                    document.querySelector( '.header-fixed-true' ).classList.remove( 'header-fixed' );
                    this.headerFixed      = false;
                    this.slideInDownClass = ''
                }
            },
            scrollEvent() {
                let offset           = 80;
                let servicesOfst     = document.getElementById( 'services' ).offsetTop;
                let aboutUsOfst      = document.getElementById( 'about-us' ).offsetTop;
                let teamMembersOfst  = document.getElementById( 'team-members' ).offsetTop;
                let testimonialsOfst = document.getElementById( 'testimonials' ).offsetTop;
                let newsOfst         = document.getElementById( 'news' ).offsetTop;
                let contactsOfst     = document.getElementById( 'contacts' ).offsetTop;

                let menuServices     = document.getElementById( 'nav-services' );
                let menuAboutUs      = document.getElementById( 'nav-about-us' );
                let menuTeamMembers  = document.getElementById( 'nav-team-members' );
                let menuPricePlans   = document.getElementById( 'nav-price-plans' );
                let menuTestimonials = document.getElementById( 'nav-testimonials' );
                let menuNews         = document.getElementById( 'nav-news' );
                let menuContacts     = document.getElementById( 'nav-contacts' );

                let offsetArray = [servicesOfst, aboutUsOfst, teamMembersOfst, pricePlansOfst, testimonialsOfst, newsOfst, contactsOfst];
                let menuArray   = [menuServices, menuAboutUs, menuTeamMembers, menuPricePlans, menuTestimonials, menuNews, menuContacts];

                if ( window.scrollY < offsetArray[0] ) {
                    this.menuElements.fill( '' );
                }

                if ( window.scrollY + offset > offsetArray[0] ) {
                    this.menuElements.fill( '' );
                    this.menuElements[0] = 'active';
                }

                if ( window.scrollY + offset > offsetArray[1] ) {
                    this.menuElements.fill( '' );
                    this.menuElements[1] = 'active';
                }

                if ( window.scrollY + offset > offsetArray[2] ) {
                    this.menuElements.fill( '' );
                    this.menuElements[2] = 'active';
                }

                if ( window.scrollY + offset > offsetArray[3] ) {
                    this.menuElements.fill( '' );
                    this.menuElements[3] = 'active';
                }

                if ( window.scrollY + offset > offsetArray[4] ) {
                    this.menuElements.fill( '' );
                    this.menuElements[4] = 'active';
                }

                if ( window.scrollY + offset > offsetArray[5] ) {
                    this.menuElements.fill( '' );
                    this.menuElements[5] = 'active';
                }

                if ( window.scrollY + offset > offsetArray[6] ) {
                    this.menuElements.fill( '' );
                    this.menuElements[6] = 'active';
                }

                this.$forceUpdate();
            }
        },
        mounted() {
            window.addEventListener( 'scroll', this.updateScroll );
            window.addEventListener( 'scroll', this.scrollEvent );
        },
        destroyed() {
            window.removeEventListener( 'scroll', this.updateScroll );
            window.removeEventListener( 'scroll', this.scrollEvent );
        }
    }
</script>
