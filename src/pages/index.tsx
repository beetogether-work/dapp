import WhiteLogo from "../components/Layout/WhiteLogo";
import Logo from "../components/Layout/Logo";
import Image from "next/image";


function Home() {
  
      return (
        <div>
          {/*[if lte IE 9]>
        <p class="browserupgrade">
          You are using an <strong>outdated</strong> browser. Please
          <a href="https://browsehappy.com/">upgrade your browser</a> to improve
          your experience and security.
        </p>
      <![endif]*/}
          {/* Preloader */}
          {/* <div className="preloader">
            <div className="preloader-inner">
              <div className="preloader-icon">
                <span />
                <span />
              </div>
            </div>
          </div> */}
          {/* /End Preloader */}
          {/* Start Header Area */}
          <header className="header navbar-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="nav-inner">
                    {/* Start Navbar */}
                    <nav className="navbar navbar-expand-lg">
                      
                      <WhiteLogo></WhiteLogo>
                      
                      <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon" />
                        <span className="toggler-icon" />
                        <span className="toggler-icon" />
                      </button>
                      <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                        <ul id="nav" className="navbar-nav ms-auto">
                          <li className="nav-item">
                            <a href="#home" className="page-scroll active" aria-label="Toggle navigation">Home</a>
                          </li>
                          <li className="nav-item">
                            <a href="#features" className="page-scroll" aria-label="Toggle navigation">Features</a>
                          </li>
                          <li className="nav-item">
                            <a href="javascript:void(0)" aria-label="Toggle navigation">Overview</a>
                          </li>
                          <li className="nav-item">
                            <a href="#pricing" className="page-scroll" aria-label="Toggle navigation">Pricing</a>
                          </li>
                          <li className="nav-item">
                            <a href="javascript:void(0)" aria-label="Toggle navigation">Team</a>
                          </li>
                          <li className="nav-item">
                            <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                            <ul className="sub-menu collapse" id="submenu-1-4">
                              <li className="nav-item"><a href="javascript:void(0)">Blog Grid Sidebar</a>
                              </li>
                              <li className="nav-item"><a href="javascript:void(0)">Blog Single</a></li>
                              <li className="nav-item"><a href="javascript:void(0)">Blog Single
                                  Sibebar</a></li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a href="javascript:void(0)" aria-label="Toggle navigation">Contact</a>
                          </li>
                        </ul>
                      </div> {/* navbar collapse */}
                      <div className="button add-list-button">
                        <a href="javascript:void(0)" className="btn">Get it now</a>
                      </div>
                    </nav>
                    {/* End Navbar */}
                  </div>
                </div>
              </div> {/* row */}
            </div> {/* container */}
          </header>
          {/* End Header Area */}
          {/* Start Hero Area */}
          <section id="home" className="hero-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-12">
                  <div className="hero-content">
                    <h1 className="wow fadeInLeft" data-wow-delay=".4s">A powerful app for your business.</h1>
                    <p className="wow fadeInLeft" data-wow-delay=".6s">From open source to pro services, Piqes helps you
                      to build, deploy, test, and monitor apps.</p>
                    <div className="button wow fadeInLeft" data-wow-delay=".8s">
                      <a href="javascript:void(0)" className="btn"><i className="lni lni-apple" /> App Store</a>
                      <a href="javascript:void(0)" className="btn btn-alt"><i className="lni lni-play-store" /> Google
                        Play</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 col-12">
                  <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                  <Image
          src={'/images/phone.png'}
          width={180}
          height={36}
          alt='phone image'
          className='-ml-2 sm:ml-0'
        />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Hero Area */}
          {/* Start Features Area */}
          <section id="features" className="features section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-title">
                    <h3 className="wow zoomIn" data-wow-delay=".2s">Features</h3>
                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Your Experience Gets Better And Better Over Time.
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                      Ipsum available, but the majority have suffered alteration in some form.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Single Feature */}
                  <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                    <i className="lni lni-cloud-upload" />
                    <h3>Push to Deploy</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                      page at its layout.</p>
                  </div>
                  {/* End Single Feature */}
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Single Feature */}
                  <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                    <i className="lni lni-lock" />
                    <h3>SSL Certificates</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                      page at its layout.</p>
                  </div>
                  {/* End Single Feature */}
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Single Feature */}
                  <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                    <i className="lni lni-reload" />
                    <h3>Simple Queues</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                      page at its layout.</p>
                  </div>
                  {/* End Single Feature */}
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Single Feature */}
                  <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                    <i className="lni lni-shield" />
                    <h3>Advanced Security</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                      page at its layout.</p>
                  </div>
                  {/* End Single Feature */}
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Single Feature */}
                  <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                    <i className="lni lni-cog" />
                    <h3>Powerful API</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                      page at its layout.</p>
                  </div>
                  {/* End Single Feature */}
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Single Feature */}
                  <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                    <i className="lni lni-layers" />
                    <h3>Database Backups</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                      page at its layout.</p>
                  </div>
                  {/* End Single Feature */}
                </div>
              </div>
            </div>
          </section>
          {/* End Features Area */}
          {/* Start Achievement Area */}
          <section className="our-achievement section">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
                  <div className="title">
                    <h2>Trusted by developers from over 80 planets</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="single-achievement wow fadeInUp" data-wow-delay=".2s">
                        <h3 className="counter"><span id="secondo1" className="countup" cup-end={100}>100</span>%</h3>
                        <p>satisfaction</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
                        <h3 className="counter"><span id="secondo2" className="countup" cup-end={120}>120</span>K</h3>
                        <p>Happy Users</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
                        <h3 className="counter"><span id="secondo3" className="countup" cup-end={125}>125</span>k+</h3>
                        <p>Downloads</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Achievement Area */}
          {/* Start Pricing Table Area */}
          <section id="pricing" className="pricing-table section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-title">
                    <h3 className="wow zoomIn" data-wow-delay=".2s">pricing</h3>
                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Pricing Plan</h2>
                    <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                      Ipsum available, but the majority have suffered alteration in some form.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  {/* Single Table */}
                  <div className="single-table wow fadeInUp" data-wow-delay=".2s">
                    {/* Table Head */}
                    <div className="table-head">
                      <h4 className="title">Hobby</h4>
                      <p>All the basics for starting a new business</p>
                      <div className="price">
                        <h2 className="amount">$12<span className="duration">/mo</span></h2>
                      </div>
                      <div className="button">
                        <a href="javascript:void(0)" className="btn">Buy Hobby</a>
                      </div>
                    </div>
                    {/* End Table Head */}
                    {/* Start Table Content */}
                    <div className="table-content">
                      <h4 className="middle-title">What's Included</h4>
                      {/* Table List */}
                      <ul className="table-list">
                        <li><i className="lni lni-checkmark-circle" /> Cras justo odio.</li>
                        <li><i className="lni lni-checkmark-circle" /> Dapibus ac facilisis in.</li>
                        <li><i className="lni lni-checkmark-circle" /> Morbi leo risus.</li>
                        <li><i className="lni lni-checkmark-circle" /> Potenti felis, in cras ligula.</li>
                      </ul>
                      {/* End Table List */}
                    </div>
                    {/* End Table Content */}
                  </div>
                  {/* End Single Table*/}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* Single Table */}
                  <div className="single-table wow fadeInUp" data-wow-delay=".4s">
                    {/* Table Head */}
                    <div className="table-head">
                      <h4 className="title">Freelancer</h4>
                      <p>All the basics for starting a new business</p>
                      <div className="price">
                        <h2 className="amount">$24<span className="duration">/mo</span></h2>
                      </div>
                      <div className="button">
                        <a href="javascript:void(0)" className="btn">Buy Freelancer</a>
                      </div>
                    </div>
                    {/* End Table Head */}
                    {/* Start Table Content */}
                    <div className="table-content">
                      <h4 className="middle-title">What's Included</h4>
                      {/* Table List */}
                      <ul className="table-list">
                        <li><i className="lni lni-checkmark-circle" /> Cras justo odio.</li>
                        <li><i className="lni lni-checkmark-circle" /> Dapibus ac facilisis in.</li>
                        <li><i className="lni lni-checkmark-circle" /> Morbi leo risus.</li>
                        <li><i className="lni lni-checkmark-circle" /> Potenti felis, in cras ligula.</li>
                      </ul>
                      {/* End Table List */}
                    </div>
                    {/* End Table Content */}
                  </div>
                  {/* End Single Table*/}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* Single Table */}
                  <div className="single-table wow fadeInUp" data-wow-delay=".6s">
                    {/* Table Head */}
                    <div className="table-head">
                      <h4 className="title">Startup</h4>
                      <p>All the basics for starting a new business</p>
                      <div className="price">
                        <h2 className="amount">$32<span className="duration">/mo</span></h2>
                      </div>
                      <div className="button">
                        <a href="javascript:void(0)" className="btn">Buy Startup</a>
                      </div>
                    </div>
                    {/* End Table Head */}
                    {/* Start Table Content */}
                    <div className="table-content">
                      <h4 className="middle-title">What's Included</h4>
                      {/* Table List */}
                      <ul className="table-list">
                        <li><i className="lni lni-checkmark-circle" /> Cras justo odio.</li>
                        <li><i className="lni lni-checkmark-circle" /> Dapibus ac facilisis in.</li>
                        <li><i className="lni lni-checkmark-circle" /> Morbi leo risus.</li>
                        <li><i className="lni lni-checkmark-circle" /> Potenti felis, in cras ligula.</li>
                      </ul>
                      {/* End Table List */}
                    </div>
                    {/* End Table Content */}
                  </div>
                  {/* End Single Table*/}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* Single Table */}
                  <div className="single-table wow fadeInUp" data-wow-delay=".8s">
                    {/* Table Head */}
                    <div className="table-head">
                      <h4 className="title">Enterprise</h4>
                      <p>All the basics for starting a new business</p>
                      <div className="price">
                        <h2 className="amount">$48<span className="duration">/mo</span></h2>
                      </div>
                      <div className="button">
                        <a href="javascript:void(0)" className="btn">Buy Enterprise</a>
                      </div>
                    </div>
                    {/* End Table Head */}
                    {/* Start Table Content */}
                    <div className="table-content">
                      <h4 className="middle-title">What's Included</h4>
                      {/* Table List */}
                      <ul className="table-list">
                        <li><i className="lni lni-checkmark-circle" /> Cras justo odio.</li>
                        <li><i className="lni lni-checkmark-circle" /> Dapibus ac facilisis in.</li>
                        <li><i className="lni lni-checkmark-circle" /> Morbi leo risus.</li>
                        <li><i className="lni lni-checkmark-circle" /> Potenti felis, in cras ligula.</li>
                      </ul>
                      {/* End Table List */}
                    </div>
                    {/* End Table Content */}
                  </div>
                  {/* End Single Table*/}
                </div>
              </div>
            </div>
          </section>
          {/*/ End Pricing Table Area */}
          {/* Start Call To Action Area */}
          <section className="section call-action">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                  <div className="cta-content">
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">You are using free Lite <br />Version of Appvilla
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s">Please, purchase full version of the template to
                      get all pages, features and commercial license.</p>
                    <div className="button wow fadeInUp" data-wow-delay=".6s">
                      <a href="javascript:void(0)" className="btn">Purchase Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Call To Action Area */}
          {/* Start Footer Area */}
          <footer className="footer">
            {/* Start Footer Top */}
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    {/* Single Widget */}
                    <div className="single-footer f-about">
                      <div className="logo">
                        <a href="index.html">
                        <Logo></Logo>
                        </a>
                      </div>
                      <p>Do it yourself is good, do it together is beetter!</p>
                    </div>
                    {/* End Single Widget */}
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-12">
                        {/* Single Widget */}
                        <div className="single-footer f-link">
                          <ul>
                            <li><a href="javascript:void(0)">Github</a></li>
                            <li><a href="javascript:void(0)">Devfolio</a></li>
                            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contact Web Admin</a></li>
                          </ul>
                        </div>
                        {/* End Single Widget */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ End Footer Top */}
          </footer>
          {/*/ End Footer Area */}
          {/* ========================= scroll-top ========================= */}
          <a href="#" className="scroll-top">
            <i className="lni lni-chevron-up" />
          </a>
          {/* ========================= JS here ========================= */}
        </div>
      );





}

export default Home;
