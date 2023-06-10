import WhiteLogo from '../components/Layout/WhiteLogo';
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
                  Do-it-yourself is good, do it together is BEEtter!
                </h1>
                <p className='wow fadeInLeft' data-wow-delay='.6s'>
                  BeeTogether is your all-in-one platform to launch and manage your own service DAO
                  or freelance collective in web 3
                </p>
                <div className='button wow fadeInLeft' data-wow-delay='.8s'>
                  <a href='/onboarding' className='btn'>
                    <i className='lni lni-apple' /> Launch Your Hive
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-7 col-md-12 col-12'>
              <div className='hero-image wow fadeInRight' data-wow-delay='.4s'>
                <Image
                  src={'/images/phone.svg'}
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
                <Image
                  src={'/images/video.png'}
                  width={600}
                  height={36}
                  alt='phone image'
                  className='-ml-2 mt-10 sm:ml-0'
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.2s'>
                <Image
                  src={'/images/demo1.png'}
                  width={600}
                  height={36}
                  alt='phone image'
                  className='-ml-2 mb-4 sm:ml-0'
                />
                <h3>Build your hive!</h3>
                <p>
                  Bring together a team to find work together. Create your Hive and add your frens.
                </p>
              </div>
              {/* End Single Feature */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.4s'>
                <Image
                  src={'/images/demo2.png'}
                  width={600}
                  height={36}
                  alt='phone image'
                  className='-ml-2 mb-4 sm:ml-0'
                />
                <h3>Search for work and make proposals.</h3>
                <p>
                  Connect with the Talentlayer protocol to get results for job types by keyword.
                </p>
              </div>
              {/* End Single Feature */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.2s'>
                <Image
                  src={'/images/demosoon.png'}
                  width={600}
                  height={36}
                  alt='phone image'
                  className='-ml-2 mb-4 sm:ml-0'
                />
                <h3>Complete work and get reviews!</h3>
                <p>Grow your Hive’s reputation and your own at the same time.</p>
              </div>
              {/* End Single Feature */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.4s'>
                <Image
                  src={'/images/demosoon.png'}
                  width={600}
                  height={36}
                  alt='phone image'
                  className='-ml-2 mb-4 sm:ml-0'
                />
                <h3>Manage your Hive treasury with voting!</h3>
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
            <div className='col-12'>
              <div className='row'>
                <div className='col-md-6 col-12'>
                  {/* Single Table */}
                  <div className='single-table wow fadeInUp' data-wow-delay='.8s'>
                    {/* Table Head */}
                    <div className='table-head'>
                      <Image
                        src={'/images/tl.png'}
                        width={180}
                        height={36}
                        alt='phone image'
                        className='-ml-2 mb-4 sm:ml-0'
                      />
                      <h4 className='title'>Find jobs via the open protocol for work!</h4>
                      <p>⭐ Search for job opportunities for your Hive by keyword</p>
                      <p>⭐ Apply for work and submit proposals</p>
                      <p>⭐ Get paid securley with escrow</p>
                      <p>💙 Built with TalentLayer Protocol</p>
                    </div>
                    {/* End Table Head */}
                  </div>
                  {/* End Single Table*/}
                </div>
                <div className='col-md-6 col-12'>
                  {/* Single Table */}
                  <div className='single-table wow fadeInUp' data-wow-delay='.8s'>
                    {/* Table Head */}
                    <div className='table-head'>
                      <Image
                        src={'/images/rep.png'}
                        width={180}
                        height={36}
                        alt='phone image'
                        className='-ml-2 mb-4 sm:ml-0'
                      />
                      <h4 className='title'>Grow your Hive's reputation (and yours too!)</h4>
                      <p>⭐ Get reviews for your hive after doing work for clients</p>
                      <p>⭐ Your Hives are displayed on your TalentLayer work reputation profile</p>
                      <p>💙 Built with TalentLayer Protocol</p>
                    </div>
                    {/* End Table Head */}
                  </div>
                  {/* End Single Table*/}
                </div>
                <div className='col-md-6 col-12'>
                  {/* Single Table */}
                  <div className='single-table wow fadeInUp' data-wow-delay='.2s'>
                    {/* Table Head */}
                    <div className='table-head'>
                      <Image
                        src={'/images/honey.png'}
                        width={180}
                        height={36}
                        alt='phone image'
                        className='-ml-2 mb-4 sm:ml-0'
                      />
                      <h4 className='title'>HoneyPot</h4>
                      <p>
                        <strong>A shared funding pool for your Hive</strong>
                      </p>
                      <p>⭐ Configure a percentage of your earnings to go to a Hive HoneyPot</p>
                      <p>⭐ Use the pot to pay for team expenses</p>
                      <p>💙 Built with ERC-4337</p>
                    </div>
                    {/* End Table Head */}
                  </div>
                  {/* End Single Table*/}
                </div>
                <div className='col-md-6 col-12'>
                  {/* Single Table */}
                  <div className='single-table wow fadeInUp' data-wow-delay='.4s'>
                    {/* Table Head */}
                    <div className='table-head'>
                      <Image
                        src={'/images/stick.png'}
                        width={180}
                        height={36}
                        alt='phone image'
                        className='-ml-2 mb-4 sm:ml-0'
                      />
                      <h4 className='title'>Goodbye Gas Fees!</h4>
                      <p>
                        <strong>Cover gas fees for your members</strong>
                      </p>
                      <p>⭐ Use your Hive HoneyPot to cover everyone's fees</p>
                      <p>💙 Built with ERC-4337 paymasters</p>
                    </div>
                    {/* End Table Head */}
                  </div>
                  {/* End Single Table*/}
                </div>
                <div className='col-md-6 col-12'>
                  {/* Single Table */}
                  <div className='single-table wow fadeInUp' data-wow-delay='.6s'>
                    {/* Table Head */}
                    <div className='table-head'>
                      <Image
                        src={'/images/vote.png'}
                        width={180}
                        height={36}
                        alt='phone image'
                        className='-ml-2 mb-4 sm:ml-0'
                      />
                      <h4 className='title'>Governance</h4>
                      <p>
                        <strong>Make decisions as a Hive</strong>
                      </p>
                      <p>⭐ Vote on what jobs to submit proposals for</p>
                      <p>⭐ Vote on how to allocate funds from your HoneyPot</p>
                    </div>
                    {/* End Table Head */}
                  </div>
                  {/* End Single Table*/}
                </div>
                <div className='col-md-6 col-12'>
                  {/* Single Table */}
                  <div className='single-table wow fadeInUp' data-wow-delay='.8s'>
                    {/* Table Head */}
                    <div className='table-head'>
                      <Image
                        src={'/images/rpc.png'}
                        width={180}
                        height={36}
                        alt='phone image'
                        className='-ml-2 mb-4 sm:ml-0'
                      />
                      <h4 className='title'>Access Your Data When You Need!</h4>
                      <p>
                        ⭐ Thanks to Gateway RPC, ensure your Hive always has access to your
                        on-chain data!
                      </p>
                      <p>💙 Built with Gateway RPC</p>
                    </div>
                    {/* End Table Head */}
                  </div>
                  {/* End Single Table*/}
                </div>
                <div className='col-md-6 col-12'>
                  {/* Single Table */}
                  <div className='single-table wow fadeInUp' data-wow-delay='.2s'>
                    {/* Table Head */}
                    <div className='table-head'>
                      <Image
                        src={'/images/robeet.png'}
                        width={180}
                        height={36}
                        alt='phone image'
                        className='-ml-2 sm:ml-0'
                      />
                      <h4 className='title'>RoBEEt AI Assistant</h4>
                      <p>
                        <strong>The AI assistant that helps your Hive work better!</strong>
                      </p>
                      <p>⭐ Write better proposals for gigs with auto-generated proposals</p>
                      <p>⭐ Get custom generated PFP logos for your Hive, based on your name</p>
                      <p>💙 Built with Leap AI and GPT</p>
                    </div>
                    {/* End Table Hea4337d */}
                  </div>
                  {/* End Single Table*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ End Pricing Table Area */}
      {/* Start Call To Action Area */}
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
                <Image
                  src={'/images/demo1.png'}
                  width={600}
                  height={36}
                  alt='phone image'
                  className='-ml-2 mb-4 sm:ml-0'
                />
                <h3>Build your hive!</h3>
                <p>
                  Bring together a team to find work together. Create your Hive and add your frens.
                </p>
              </div>
              {/* End Single Feature */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.4s'>
                <Image
                  src={'/images/demo2.png'}
                  width={600}
                  height={36}
                  alt='phone image'
                  className='-ml-2 mb-4 sm:ml-0'
                />
                <h3>Search for work and make proposals.</h3>
                <p>
                  Connect with the Talentlayer protocol to get results for job types by keyword.
                </p>
              </div>
              {/* End Single Feature */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.2s'>
                <Image
                  src={'/images/demosoon.png'}
                  width={600}
                  height={36}
                  alt='phone image'
                  className='-ml-2 mb-4 sm:ml-0'
                />
                <h3>Complete work and get reviews!</h3>
                <p>Grow your Hive’s reputation and your own at the same time.</p>
              </div>
              {/* End Single Feature */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.4s'>
                <Image
                  src={'/images/demosoon.png'}
                  width={600}
                  height={36}
                  alt='phone image'
                  className='-ml-2 mb-4 sm:ml-0'
                />
                <h3>Manage your Hive treasury with voting!</h3>
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
      {/* Start Features Area */}
      <section id='features' className='features section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-title'>
                <h3 className='wow zoomIn' data-wow-delay='.2s'>
                  Our Stack
                </h3>
                <h2 className='wow fadeInUp' data-wow-delay='.4s'>
                  Built With The BEEst
                </h2>
                <p>
                  Thank you to all of our partners for helping us to make the Hive experience come
                  to live!
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.4s'>
                <Image
                  src={'/images/tech.png'}
                  width={600}
                  height={36}
                  alt='phone image'
                  className='-ml-2 mb-4 sm:ml-0'
                />
                <h3>Hives on a Strong Foundation</h3>
                <p>
                  You can trust that your Hive is in good hands thanks to our best-in-class
                  decentralized tech stack!
                </p>
              </div>
              {/* End Single Feature */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Start Single Feature */}
              <div className='single-feature wow fadeInUp' data-wow-delay='.2s'>
                <Image
                  src={'/images/chains.png'}
                  width={600}
                  height={36}
                  alt='phone image'
                  className='-ml-2 mb-4 sm:ml-0'
                />
                <h3>A Multi-Chain Future</h3>
                <p>
                  For Hives that work across many chain ecosystems, we've got you covered! We
                  support all your favorite L1s and L2s.
                </p>
              </div>
              {/* End Single Feature */}
            </div>
          </div>
        </div>
      </section>
      {/* End Features Area */}
      {/* End Call To Action Area */}
      {/* Start Footer Area */}
      <footer className='footer'>
        {/* Start Footer Top */}
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-md-8 col-12'>
                <div className='row'>
                  <div className='col-lg-3 col-md-6 col-12'>
                    {/* Single Widget */}
                    <div className='single-footer f-link'>
                      <ul className='pl-0'>
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
    </div>
  );
}

export default Home;
