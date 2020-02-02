<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <main class="site-main" id="main">
      <slot/>
    </main>
    <footer class="site-footer" id="colophon">
      <div class="footer_wrapper">
        <div class="footer_branding">
          <p>Hangar 49</p>
          <p>Warbirds</p>
        </div>
        <div class="footer_line_div">
          <span class="footer_line"></span>
        </div>
        <div class="footer_contact" id="contact">
            <strong class="footer_heading">Contact Us</strong>
            <p>Have any questions or want to inquire about one of our warbirds? Give us a shout!</p>
            <ul>
              <li><a href="tel:1-587-888-5001">1-587-888-5001</a></li>
              <li><a href="email:contact@hangar49warbirds.com">contact@hangar49warbirds.com</a></li>
            </ul>
        </div>
        <div class="footer_nav">
          <strong class="footer_heading">Navigate</strong>
          <ul>
              <li><a href="#home" class="smoothScroll">Home</a></li>
              <li><a href="https://hangar49.epiqk.ca/inventory/" class="smoothScroll">Inventory</a></li>
              <li><a href="https://hangar49.epiqk.ca/projects/" class="smoothScroll">Projects</a></li>
              <li><a href="https://hangar49.epiqk.ca/contact/">Contact</a></li>
          </ul>
        </div>
        <div class="footer_social">
            <strong class="footer_heading">Follow us</strong>
            <ul class="footer_social-list">
              <li><a href="https://facebook.com/hangar49warbirds"><svg class="svg-inline--fa fa-facebook-square fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg><!-- <i class="fab fa-facebook-square" aria-hidden="true"></i> --></a></li>                    <li><a href="https://twitter.com/hangar49warbirds"><svg class="svg-inline--fa fa-twitter-square fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="twitter-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg><!-- <i class="fab fa-twitter-square" aria-hidden="true"></i> --></a></li>                    <li><a href="https://instagram.com/hangar49warbirds"><svg class="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg><!-- <i class="fab fa-instagram" aria-hidden="true"></i> --></a></li>                    <li><a href="https://youtube.com/hangar49warbirds"><svg class="svg-inline--fa fa-youtube fa-w-18" aria-hidden="true" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg><!-- <i class="fab fa-youtube"></i> --></a></li>                            
            </ul>
        </div>
        </div>
        <div class="footer_copyright">
          <p>Copyright 2017-2020 Hangar 49</p>
          <!-- <p>Website by <a href="https://epiqk.io">epiqk</a></p> -->
        </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  // max-width: 760px;
  // margin: 0 auto;
  // padding-left: 20px;
  // padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.site-footer {
    text-align: center;
    padding-top: 22px;
    color: white;
    background-color: $color_footer-background;
}

.footer_wrapper {
    max-width: 1400px;
    margin: 0 auto;
}

.footer_heading {
    font-family: $font_heading;
    font-size: 1.1em;
    color: $color_footer-headings;
    margin: 0.6em 0;
}

.site-footer ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    line-height: 1;
}

.site-footer a {
    color: $color_footer-text;
    text-decoration: none;
    font-family: $font_text;
    font-size: 0.8em;
    font-weight: lighter;
    transition: 0.2s;
}

.site-footer a:active,
.site-footer a:hover {
    color: $color_footer-link-active;
    transition: 0.2s;
}

.footer_branding {
    font-family: $font_logo;
    font-size: 1.5em;
}

.footer_branding p {
    margin: 0;
    padding: 0;
    font-weight: bold;
    line-height: 1.5;
}

.footer_branding p:first-of-type {
    font-size: 1em;
}

.footer_branding p:nth-of-type(2) {
    font-size: 0.8em;
    margin-top: -12px;
}

.footer_contact {
    margin: 20px 0 20px 0;
    padding: 0 20px;
    text-align: left;
    max-width: 320px;
}

.footer_contact h2 {
    font-family: $font_heading;
    font-size: 1.1em;
    color: $color_footer-headings;
    margin: 0.6em 0;
}

.footer_contact p {
    font-family: $font_text;
    font-size: 0.7em;
    font-weight: lighter;
    color: $color_footer-text;
    margin: 0.6em 0;
    padding-right: 25px;
}

.footer_contact ul {
    margin-top: 10px;
}

.footer_contact i {
    font-size: 1.2em;
    margin-right: 3px;
}

.footer_contact li:first-of-type i {
    margin-right: 7px;
}

.footer_contact a {
    line-height: 1.5em;
}

.footer_social {
    margin: 0 auto;
    padding-bottom: 20px;
//    max-width: 300px;
}

.footer_social ul {
    display: flex;
    justify-content: space-between;
    font-size: 2em;
    padding: 10px 20px 0 20px;
    max-width: 300px;
    margin: 0 auto;
}


.footer_copyright p {
    margin: 0;
    padding: 0;
    line-height: 40px;
    color: $color_footer-text;
}

.footer_copyright {
    font-family: $font_text;
    font-size: 0.8em;
    background-color: $color_footer-copyright-background;
    height: 40px;
}

.footer_nav {
    text-align: left;
    margin-bottom: 15px;
    padding: 0 20px;
}

//////////////////////////////////////////
////// Grid and Responsive Styling ///////
//////////////////////////////////////////


@supports (grid-area: auto) {
    
    @media screen and (min-width: 680px) {
        
        .footer_wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
        
        .footer_branding {
            grid-column: 1/4;
            padding-bottom: 20px;
        }
        
        .footer_line_div {
            grid-column: 1/4;
        }
        
        .footer_line {
            display: block;
            border: none;
            color: white;
            height: 2px;
            background: black;
            background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 350, from($color_header-main-nav-border), to(rgba(255,255,255,0)));
        }
        
        .footer_contact {
            margin: 10px 0 20px 0;
            padding-left: 20px;
            padding-right: 0;
        }
        
        .footer_nav {
            text-align: right;
            margin: 10px 0 20px 0;
            grid-column: 3/4;
        }
        
        .footer_nav ul {
            margin: 0.6em 0;
        }
        
        .footer_social {
            margin: 10px 0 20px 0;
            grid-column: 2/3;
            grid-row: 3/4;
            width: 100%;
        }
        
        .footer_copyright {
            margin-top: 15px;
        }
    }
    
}
</style>
