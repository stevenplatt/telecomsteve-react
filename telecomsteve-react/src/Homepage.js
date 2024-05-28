import './css/Homepage.css';
import caterpillarLogo from './img/caterpillar.svg';
import salesforceLogo from './img/salesforce.svg';
import twitterLogo from './img/x.svg';
import twilioLogo from './img/twilio.svg';
import o1Logo from './img/o1labs.svg';

// credit: https://codepen.io/rwmajux/pen/MyOQBG

function Homepage() {
    return (
        <div className="main">

            <div className="absolute-center-vertical left-20">
                <div className="headline">
                    DevOps for AI and Web3
                </div>
                <div className="subtitle">
                    Don’t forget this subtitle that is super important.
                </div>
                <button className="cta">
                    Now Click Me
                </button>
            </div>

            <section className="brands text-center">
                <div className="container">
                    <div className="row">
                    <div className="col-xs-12">
                        <h3>Trusted by the world's most innovative brands</h3>
                    </div>
                    </div>
                </div>
                <ul className="brand-logos">
                    <li className="hide-xs">
                    <img alt="o1Labs" height="36" src={o1Logo} width="110" />
                    </li>
                    <li>
                    <img alt="Caterpillar" height="32" src={caterpillarLogo} width="165" />
                    </li>
                    <li className="hide-xs">
                    <img alt="Twilio" height="42" src={twilioLogo} width="165" />
                    </li>
                    <li>
                    <img alt="Salesforce" height="40" src={salesforceLogo} width="60" />
                    </li>
                    <li className="hide-xs hide-sm hide-md">
                    <img alt="Twitter" height="32" src={twitterLogo} width="60" />
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Homepage;