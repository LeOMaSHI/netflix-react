import "../components/footer.css";

const Footer = () => (
  <footer className="footer ">
    <div className="row justify-content-center">
      <div className="col-6">
        <div className="row">
          <div className="col mb-2">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col footer-links">
            <p>
              <a href="#">Audio and Subtitles</a>
            </p>
            <p>
              <a href="#">Media Center</a>
            </p>
            <p>
              <a href="#">Privacy</a>
            </p>
            <p>
              <a href="#">Contact us</a>
            </p>
          </div>
          <div className="col footer-links">
            <p>
              <a href="#">Audio Description</a>
            </p>
            <p>
              <a href="#">Investor Relations</a>
            </p>
            <p>
              <a href="#">Legal Notices</a>
            </p>
          </div>
          <div className="col footer-links">
            <p>
              <a href="#">Help Center</a>
            </p>
            <p>
              <a href="#">Jobs</a>
            </p>
            <p>
              <a href="#">Cookie Preferences</a>
            </p>
          </div>
          <div className="col footer-links">
            <p>
              <a href="#">Gift Cards</a>
            </p>
            <p>
              <a href="#">Terms of Use</a>
            </p>
            <p>
              <a href="#">Corporate Information</a>
            </p>
          </div>
        </div>
        <button className="btn btn-sm footer-button rounded-0 mt-3">Service Code</button>
        <div className="mt-2 copyright">© 1997-2023 Netflix, Inc.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
