import WhiteLogo from '../components/Layout/WhiteLogo';
import Logo from '../components/Layout/Logo';
import Image from 'next/image';

function Home() {
  return (
    <div className='text-black bg-white'>
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
      <header className='header navbar-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <div className='nav-inner'>
                {/* Start Navbar */}
                <nav className='navbar navbar-expand-lg'>
                  <WhiteLogo></WhiteLogo>
                  <button
                    className='navbar-toggler mobile-menu-btn'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='toggler-icon' />
                    <span className='toggler-icon' />
                    <span className='toggler-icon' />
                  </button>
                  <div
                    className='collapse navbar-collapse sub-menu-bar'
                    id='navbarSupportedContent'>
                    <ul id='nav' className='navbar-nav ms-auto'>
                      <li className='nav-item'>
                        <a
                          href='#home'
                          className='page-scroll active'
                          aria-label='Toggle navigation'>
                          Home
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='#features' className='page-scroll' aria-label='Toggle navigation'>
                          Features
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='javascript:void(0)' aria-label='Toggle navigation'>
                          Overview
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='#pricing' className='page-scroll' aria-label='Toggle navigation'>
                          Pricing
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='javascript:void(0)' aria-label='Toggle navigation'>
                          Team
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='dd-menu collapsed'
                          href='javascript:void(0)'
                          data-bs-toggle='collapse'
                          data-bs-target='#submenu-1-4'
                          aria-controls='navbarSupportedContent'
                          aria-expanded='false'
                          aria-label='Toggle navigation'>
                          Blog
                        </a>
                        <ul className='sub-menu collapse' id='submenu-1-4'>
                          <li className='nav-item'>
                            <a href='javascript:void(0)'>Blog Grid Sidebar</a>
                          </li>
                          <li className='nav-item'>
                            <a href='javascript:void(0)'>Blog Single</a>
                          </li>
                          <li className='nav-item'>
                            <a href='javascript:void(0)'>Blog Single Sibebar</a>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item'>
                        <a href='javascript:void(0)' aria-label='Toggle navigation'>
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>{' '}
                  {/* navbar collapse */}
                  <div className='button add-list-button'>
                    <a href='javascript:void(0)' className='btn'>
                      Get it now
                    </a>
                  </div>
                </nav>
                {/* End Navbar */}
              </div>
            </div>
          </div>{' '}
          {/* row */}
        </div>{' '}
        {/* container */}
      </header>
      {/* End Header Area */}
      {/* Start Hero Area */}
      <section id='home' className='hero-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5 col-md-12 col-12'>
              <div className='hero-content'>
                <h1 className='wow fadeInLeft' data-wow-delay='.4s'>
                  Do-it-yourself is good, do it together is beeter!
                </h1>
                <p className='wow fadeInLeft' data-wow-delay='.6s'>
                  BeeTogether is your all-in-one platform to launch and manage your own service DAO
                  or freelance collective in web 3
                </p>
                <div className='button wow fadeInLeft' data-wow-delay='.8s'>
                  <a href='javascript:void(0)' className='btn'>
                    <i className='lni lni-apple' /> Lannch Your Hive
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-7 col-md-12 col-12'>
              <div className='hero-image wow fadeInRight' data-wow-delay='.4s'>
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
      <section id='features' className='features section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-title'>
                <h3 className='wow zoomIn' data-wow-delay='.2s'>
                  Start Your Hive
                </h3>
                <h2 className='wow fadeInUp' data-wow-delay='.4s'>
                  The Hive Mindset
                </h2>
                <p className='wow fadeInUp' data-wow-delay='.6s'>
                  Hives are groups of independent workers that come together to get hired, make
                  money, and grow their reputations together! This work style is taking the world by
                  storm as more people transition to freelance and DAO-based work. What about you?
                  Do you have the #HiveMindset?
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.2s'>
                <i className='lni lni-cloud-upload' />
                <h3>1. Find your hive!</h3>
                <p>
                  Bring together a team to find work together. Create your Hive and add your frens.
                </p>
              </div>
              {/* End Single Feature */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.4s'>
                <i className='lni lni-lock' />
                <h3>2. Search for work.</h3>
                <p>
                  Connect with the Talentlayer protocol to get results for job types by keyword.
                </p>
              </div>
              {/* End Single Feature */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.6s'>
                <i className='lni lni-reload' />
                <h3>3. Apply and get hired.</h3>
                <p>
                  Apply to and get hired for gigs. Configure automatic pay splits for team members.
                </p>
              </div>
              {/* End Single Feature */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.2s'>
                <i className='lni lni-shield' />
                <h3>4. Complete work and get reviews!</h3>
                <p>Grow your Hive’s reputation and your own at the same time.</p>
              </div>
              {/* End Single Feature */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.4s'>
                <i className='lni lni-cog' />
                <h3>5. Manage your Hive treasury with voting!</h3>
                <p>
                  Cover admin costs for everyone in the collective, pay for joint marketing, and
                  more.
                </p>
              </div>
              {/* End Single Feature */}
            </div>
          </div>
        </div>
      </section>
      {/* End Features Area */}
      {/* Start Achievement Area */}
      <section className='our-achievement section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1 col-md-12 col-12'>
              <div className='title'>
                <h2>Why Form a Hive?</h2>
                <p>Working with your frens has many benefits!</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 col-md-12 col-12'>
              <div className='row'>
                <div className='col-lg-4 col-md-4 col-12'>
                  <div className='single-achievement wow fadeInUp' data-wow-delay='.2s'>
                    <h3 className='counter'>save on costs</h3>
                    <p>
                      taking clients together means you don't have to do accounting, marketing, and
                      other admin tasks alone
                    </p>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                  <div className='single-achievement wow fadeInUp' data-wow-delay='.4s'>
                    <h3 className='counter'>get bigger clients</h3>
                    <p>
                      by combining skillsets with other workers, take bigger projects than you could
                      alone
                    </p>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                  <div className='single-achievement wow fadeInUp' data-wow-delay='.6s'>
                    <h3 className='counter'>grow together</h3>
                    <p>
                      upskill and grow your reputation by working on more important projects with
                      cool ppl
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Achievement Area */}
      {/* Start Pricing Table Area */}
      <section id='pricing' className='pricing-table section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-title'>
                <h3 className='wow zoomIn' data-wow-delay='.2s'>
                  Features
                </h3>
                <h2 className='wow fadeInUp' data-wow-delay='.4s'>
                  Make Your Hive Buzz With Custom Features!
                </h2>
                <p className='wow fadeInUp' data-wow-delay='.6s'>
                  BeeTogether has all you need to run a successful hive.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-12'>
              {/* Single Table */}
              <div className='single-table wow fadeInUp' data-wow-delay='.2s'>
                {/* Table Head */}
                <div className='table-head'>
                  <h4 className='title'>BeeScribe</h4>
                  <p>All the basics for starting a new business</p>
                  <div className='price'>
                    <Image
                      src={'/images/logo-placeholder.png'}
                      width={180}
                      height={36}
                      alt='phone image'
                      className='-ml-2 sm:ml-0'
                    />
                  </div>
                  <div className='button'>
                    <a href='javascript:void(0)' className='btn'>
                      Learn More
                    </a>
                  </div>
                </div>
                {/* End Table Head */}
              </div>
              {/* End Single Table*/}
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
              {/* Single Table */}
              <div className='single-table wow fadeInUp' data-wow-delay='.4s'>
                {/* Table Head */}
                <div className='table-head'>
                  <h4 className='title'>Account Abstraction</h4>
                  <p>All the basics for starting a new business</p>
                  <div className='price'>
                    <Image
                      src={'/images/logo-placeholder.png'}
                      width={180}
                      height={36}
                      alt='phone image'
                      className='-ml-2 sm:ml-0'
                    />
                  </div>
                  <div className='button'>
                    <a href='javascript:void(0)' className='btn'>
                      Learn More
                    </a>
                  </div>
                </div>
                {/* End Table Head */}
              </div>
              {/* End Single Table*/}
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
              {/* Single Table */}
              <div className='single-table wow fadeInUp' data-wow-delay='.6s'>
                {/* Table Head */}
                <div className='table-head'>
                  <h4 className='title'>Governance</h4>
                  <p>All the basics for starting a new business</p>
                  <div className='price'>
                    <Image
                      src={'/images/logo-placeholder.png'}
                      width={180}
                      height={36}
                      alt='phone image'
                      className='-ml-2 sm:ml-0'
                    />
                  </div>
                  <div className='button'>
                    <a href='javascript:void(0)' className='btn'>
                      Learn More
                    </a>
                  </div>
                </div>
                {/* End Table Head */}
              </div>
              {/* End Single Table*/}
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
              {/* Single Table */}
              <div className='single-table wow fadeInUp' data-wow-delay='.8s'>
                {/* Table Head */}
                <div className='table-head'>
                  <h4 className='title'>Gateway RPC</h4>
                  <p>A more reliable way to interact with blockchain tech.</p>
                  <div className='price'>
                    <Image
                      src={'/images/logo-placeholder.png'}
                      width={180}
                      height={36}
                      alt='phone image'
                      className='-ml-2 sm:ml-0'
                    />
                  </div>
                  <div className='button'>
                    <a href='javascript:void(0)' className='btn'>
                      Learn More
                    </a>
                  </div>
                </div>
                {/* End Table Head */}
              </div>
              {/* End Single Table*/}
            </div>
          </div>
        </div>
      </section>
      {/*/ End Pricing Table Area */}
      {/* Start Call To Action Area */}

      {/* End Call To Action Area */}
      {/* Start Footer Area */}
      <footer className='footer'>
        {/* Start Footer Top */}
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-4 col-12'>
                {/* Single Widget */}
                <div className='single-footer f-about'>
                  <div className='logo'>
                    <a href='index.html'>
                      <Logo></Logo>
                    </a>
                  </div>
                  <p>Do it yourself is good, do it together is beetter!</p>
                </div>
                {/* End Single Widget */}
              </div>
              <div className='col-lg-8 col-md-8 col-12'>
                <div className='row'>
                  <div className='col-lg-3 col-md-6 col-12'>
                    {/* Single Widget */}
                    <div className='single-footer f-link'>
                      <ul>
                        <li>
                          <a href='https://github.com/beetogether-work/dapp'>Github</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Devfolio</a>
                        </li>
                        <li>
                          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                            Contact Web Admin
                          </a>
                        </li>
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
      <a href='#' className='scroll-top'>
        <i className='lni lni-chevron-up' />
      </a>
      {/* ========================= JS here ========================= */}
    </div>
  );
}

export default Home;
