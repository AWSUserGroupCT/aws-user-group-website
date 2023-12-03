import logo from "../../assets/meetup_logo.png"; // Adjust the path to where your actual meetup logo is
import meetupLogo from "../../assets/meetup-icon.svg"; // Adjust the path to where your actual meetup logo is
import discordLogo from "../../assets/discord-icon.svg"; // Adjust the path to where your actual discord logo is

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Set the minimum height of the root container to 100vh
  },
  footer: {
    marginTop: "auto", // Push the footer to the bottom of the page
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#e9ecef", // Adjusted to a slightly grayer color
    color: "#333", // Example text color
    fontSize: "0.8rem", // Example font size
    alignItems: "center", // To vertically align items if necessary
  },
  logoSection: {
    flex: "1",
  },
  logo: {
    width: "100px", // Adjust as needed
  },
  section: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    padding: "0 10px", // Example padding
  },
  sectionTitle: {
    marginBottom: "10px", // Example margin
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  listItem: {
    marginBottom: "5px", // Example margin
  },
  link: {
    color: "#007bff", // Example link color
    textDecoration: "none",
  },
};

const Footer = () => {
  return (
    <div style={styles.root}>
      <footer style={styles.footer}>
        <div style={styles.logoSection}>
          <img src={logo} alt="AWS User Group Meetup" style={styles.logo} />
        </div>
        <div style={styles.section}>
          <h5 style={styles.sectionTitle}>Directory</h5>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <a href="/" style={styles.link}>
                Home
              </a>
            </li>
            {/* ... other list items */}
          </ul>
        </div>
        <div style={styles.section}>
          <h5 style={styles.sectionTitle}>Follow Us</h5>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <a
                href="https://www.meetup.com/aws-community-meetup-connecticut/"
                style={{
                  ...styles.link,
                  color: "#333",
                  fontFamily: "Libre Franklin",
                  marginLeft: "5px", // Add marginLeft to move the word "Meetup" to the right
                }}
              >
                <img
                  src={meetupLogo}
                  alt="Meetup"
                  style={{ ...styles.logo, width: "30px", marginRight: "5px" }}
                />
                Meetup
              </a>
            </li>
            <li style={styles.listItem}>
              <a
                href="https://discord.gg/nnfXms4Z4Q"
                style={{
                  ...styles.link,
                  color: "#333",
                  fontFamily: "Libre Franklin",
                  marginLeft: "5px", // Add marginLeft to move the word "Discord" to the right
                }}
              >
                <img
                  src={discordLogo}
                  alt="Discord"
                  style={{ ...styles.logo, width: "30px", marginRight: "5px" }}
                />
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div style={styles.section}>
          <h5 style={styles.sectionTitle}>About Us</h5>
          <p>
            We are a group of AWS enthusiasts who want to learn from each other.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
