import Navbar from "./Navbar";
import "./Help.css";

function Help() {
  return (
    <>
      <Navbar />

      <div className="help-container">
        <h2>Help & Support</h2>
        <p className="subtitle">
          Welcome to the Online Property Registration System Help Center.
          Here you can find answers to common questions and guidance on using
          the portal effectively.
        </p>

        {/* Section 1 */}
        <div className="help-section">
          <h3>1. How to Register on the Portal?</h3>
          <p>
            To use the Online Property Registration System, users must first
            create an account. Click on the "Register" button on the home page
            and fill in your personal details such as name, email, and password.
            Once registered, log in using your credentials to access the
            dashboard.
          </p>
        </div>

        {/* Section 2 */}
        <div className="help-section">
          <h3>2. How to Login?</h3>
          <p>
            Click on the "Login" option in the navigation bar. Enter your
            registered email and password. After successful login, you will be
            redirected to your dashboard where you can apply for new property
            registrations and track your applications.
          </p>
        </div>

        {/* Section 3 */}
        <div className="help-section">
          <h3>3. How to Register a Property?</h3>
          <p>
            After logging in, click on "New Registration". Fill in the required
            property details such as seller name, buyer name, plot number,
            survey number, area, village, taluka, and district. Submit the form
            to register your property. Your application will be marked as
            "Pending" until verified by the concerned authority.
          </p>
        </div>

        {/* Section 4 */}
        <div className="help-section">
          <h3>4. How to Track My Application?</h3>
          <p>
            Navigate to the "My Applications" page from your dashboard. You
            will see all your submitted property registration applications
            along with their current status (Pending, Approved, or Rejected).
          </p>
        </div>

        {/* Section 5 */}
        <div className="help-section">
          <h3>5. What Do the Status Values Mean?</h3>
          <ul>
            <li><b>Pending:</b> Your application is under review.</li>
            <li><b>Approved:</b> Your property registration has been approved.</li>
            <li><b>Rejected:</b> Your application has been rejected due to incorrect or incomplete information.</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="help-section">
          <h3>6. What If My Application is Rejected?</h3>
          <p>
            If your application is rejected, please review the details you
            submitted and ensure all information is accurate. You can submit a
            new application with the corrected details.
          </p>
        </div>

        {/* Section 7 */}
        <div className="help-section">
          <h3>7. Who Approves the Applications?</h3>
          <p>
            Property registration applications are reviewed by the
            Sub-Divisional Officer (SDO). The SDO verifies the documents and
            property details before approving or rejecting applications.
          </p>
        </div>

        {/* Section 8 */}
        <div className="help-section">
          <h3>8. Admin Panel Access</h3>
          <p>
            The Admin Panel is restricted to authorized government officers.
            Unauthorized users cannot access admin features such as approving
            or rejecting applications.
          </p>
        </div>

        {/* Section 9 */}
        <div className="help-section">
          <h3>9. Data Security & Privacy</h3>
          <p>
            All user data is securely stored in the system database. Only
            authorized personnel can access sensitive information. The system
            ensures transparency and data integrity.
          </p>
        </div>

        {/* Section 10 */}
        <div className="help-section">
          <h3>10. Contact Support</h3>
          <p>
            If you face any technical issues or need further assistance,
            please contact our support team.
          </p>

          <div className="contact-box">
            <p><b>Email:</b> support@onlineregistry.com</p>
            <p><b>Phone:</b> +91 98765 43210</p>
            <p><b>Office Hours:</b> Monday – Friday, 10:00 AM – 5:00 PM</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
