// import React, { useState } from "react";
// import {
//   Grid,
//   CircularProgress,
//   Typography,
//   Button,
//   Tabs,
//   Tab,
//   TextField,
//   Fade,
// } from "@material-ui/core";
// import { withRouter } from "react-router-dom";
// import classnames from "classnames";

// // styles
// import useStyles from "./styles";

// // logo
// import logo from "../../images/KLK SVG Logo.svg";
// import google from "../../images/google.svg";

// // context
// import { useUserDispatch, loginUser } from "../../context/UserContext";

// function Login(props) {
//   var classes = useStyles();

//   // global
//   var userDispatch = useUserDispatch();

//   // local
//   var [isLoading, setIsLoading] = useState(false);
//   var [error, setError] = useState(null);
//   var [activeTabId, setActiveTabId] = useState(0);
//   var [nameValue, setNameValue] = useState("");
//   var [loginValue, setLoginValue] = useState("");
//   var [passwordValue, setPasswordValue] = useState("");

//   return (
//     <Grid container className={classes.container}>
//       <div className={classes.logotypeContainer}>
//         <img src={logo} alt="logo" className={classes.logotypeImage} />
//         <Typography className={classes.logotypeText}>KLK Ventures</Typography>
//       </div>
//       <div className={classes.formContainer}>
//         <div className={classes.form}>
//           <Tabs
//             value={activeTabId}
//             onChange={(e, id) => setActiveTabId(id)}
//             indicatorColor="primary"
//             textColor="primary"
//             centered
//           >
//             <Tab label="Login" classes={{ root: classes.tab }} />
//             {/* <Tab label="New User" classes={{ root: classes.tab }} /> */}
//           </Tabs>
//           {activeTabId === 0 && (
//             <React.Fragment>
//               <Typography variant="h1" className={classes.greeting}>
//                 Good Morning, User
//               </Typography>
//               <Button size="large" className={classes.googleButton}>
//                 <img src={google} alt="google" className={classes.googleIcon} />
//                 &nbsp;Sign in with Google
//               </Button>
//               <div className={classes.formDividerContainer}>
//                 <div className={classes.formDivider} />
//                 <Typography className={classes.formDividerWord}>or</Typography>
//                 <div className={classes.formDivider} />
//               </div>
//               <Fade in={error}>
//                 <Typography color="secondary" className={classes.errorMessage}>
//                   Something is wrong with your login or password :(
//                 </Typography>
//               </Fade>
//               <TextField
//                 id="email"
//                 InputProps={{
//                   classes: {
//                     underline: classes.textFieldUnderline,
//                     input: classes.textField,
//                   },
//                 }}
//                 value={loginValue}
//                 onChange={(e) => setLoginValue(e.target.value)}
//                 margin="normal"
//                 placeholder="Email Adress"
//                 type="email"
//                 fullWidth
//               />
//               <TextField
//                 id="password"
//                 InputProps={{
//                   classes: {
//                     underline: classes.textFieldUnderline,
//                     input: classes.textField,
//                   },
//                 }}
//                 value={passwordValue}
//                 onChange={(e) => setPasswordValue(e.target.value)}
//                 margin="normal"
//                 placeholder="Password"
//                 type="password"
//                 fullWidth
//               />
//               <div className={classes.formButtons}>
//                 {isLoading ? (
//                   <CircularProgress size={26} className={classes.loginLoader} />
//                 ) : (
//                   <Button
//                     disabled={
//                       loginValue.length === 0 || passwordValue.length === 0
//                     }
//                     onClick={() =>
//                       loginUser(
//                         userDispatch,
//                         loginValue,
//                         passwordValue,
//                         props.history,
//                         setIsLoading,
//                         setError,
//                       )
//                     }
//                     variant="contained"
//                     color="primary"
//                     size="large"
//                   >
//                     Login
//                   </Button>
//                 )}
//                 <Button
//                   color="primary"
//                   size="large"
//                   className={classes.forgetButton}
//                 >
//                   Forget Password
//                 </Button>
//               </div>
//             </React.Fragment>
//           )}
//           {activeTabId === 1 && (
//             <React.Fragment>
//               <Typography variant="h1" className={classes.greeting}>
//                 Welcome!
//               </Typography>
//               <Typography variant="h2" className={classes.subGreeting}>
//                 Create your account
//               </Typography>
//               <Fade in={error}>
//                 <Typography color="secondary" className={classes.errorMessage}>
//                   Something is wrong with your login or password :(
//                 </Typography>
//               </Fade>
//               <TextField
//                 id="name"
//                 InputProps={{
//                   classes: {
//                     underline: classes.textFieldUnderline,
//                     input: classes.textField,
//                   },
//                 }}
//                 value={nameValue}
//                 onChange={(e) => setNameValue(e.target.value)}
//                 margin="normal"
//                 placeholder="Full Name"
//                 type="email"
//                 fullWidth
//               />
//               <TextField
//                 id="email"
//                 InputProps={{
//                   classes: {
//                     underline: classes.textFieldUnderline,
//                     input: classes.textField,
//                   },
//                 }}
//                 value={loginValue}
//                 onChange={(e) => setLoginValue(e.target.value)}
//                 margin="normal"
//                 placeholder="Email Adress"
//                 type="email"
//                 fullWidth
//               />
//               <TextField
//                 id="password"
//                 InputProps={{
//                   classes: {
//                     underline: classes.textFieldUnderline,
//                     input: classes.textField,
//                   },
//                 }}
//                 value={passwordValue}
//                 onChange={(e) => setPasswordValue(e.target.value)}
//                 margin="normal"
//                 placeholder="Password"
//                 type="password"
//                 fullWidth
//               />
//               <div className={classes.creatingButtonContainer}>
//                 {isLoading ? (
//                   <CircularProgress size={26} />
//                 ) : (
//                   <Button
//                     onClick={() =>
//                       loginUser(
//                         userDispatch,
//                         loginValue,
//                         passwordValue,
//                         props.history,
//                         setIsLoading,
//                         setError,
//                       )
//                     }
//                     disabled={
//                       loginValue.length === 0 ||
//                       passwordValue.length === 0 ||
//                       nameValue.length === 0
//                     }
//                     size="large"
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     className={classes.createAccountButton}
//                   >
//                     Create your account
//                   </Button>
//                 )}
//               </div>
//               <div className={classes.formDividerContainer}>
//                 <div className={classes.formDivider} />
//                 <Typography className={classes.formDividerWord}>or</Typography>
//                 <div className={classes.formDivider} />
//               </div>
//               <Button
//                 size="large"
//                 className={classnames(
//                   classes.googleButton,
//                   classes.googleButtonCreating,
//                 )}
//               >
//                 <img src={google} alt="google" className={classes.googleIcon} />
//                 &nbsp;Sign in with Google
//               </Button>
//             </React.Fragment>
//           )}
//         </div>

//       </div>
//     </Grid>
//   );
// }

// export default withRouter(Login);

// new login page

import myimg from "../../images/login_img.png";

import { Link } from "@material-ui/core";
import React, { useState } from "react";

function ModernLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [name, setName] = useState("Refique Rohman");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setError(false);
    setTimeout(() => {
      setIsLoading(false);
      if (email && password) {
        console.log("Login successful");
      } else {
        setError(true);
      }
    }, 1500);
  };

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    leftSection: {
      width: "45%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      padding: "32px",
    },
    formContainer: {
      width: "100%",
      maxWidth: "448px",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "8px",
    },
    logoIcon: {
      fontSize: "36px",
      fontWeight: 900,
    },
    logoText: {
      fontSize: "32px",
      fontWeight: 700,
      color: "#1a1a2e",
    },
    heading: {
      fontSize: "28px",
      fontWeight: 600,
      color: "#1a1a2e",
      marginTop: "48px",
      marginBottom: "8px",
    },
    subHeading: {
      fontSize: "14px",
      color: "#6b7280",
      marginBottom: "32px",
    },
    socialButtons: {
      display: "flex",
      gap: "16px",
      marginBottom: "24px",
    },
    socialButton: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: "12px 16px",
      fontSize: "14px",
      fontWeight: 500,
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      backgroundColor: "#ffffff",
      color: "#374151",
      cursor: "pointer",
      transition: "background-color 0.2s",
      outline: "none",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: "#9ca3af",
      fontSize: "14px",
      margin: "24px 0",
    },
    dividerLine: {
      flex: 1,
      borderBottom: "1px solid #e5e7eb",
    },
    dividerText: {
      padding: "0 16px",
    },
    errorMessage: {
      color: "#dc2626",
      fontSize: "14px",
      marginBottom: "16px",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      marginBottom: "20px",
      fontSize: "14px",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      outline: "none",
      transition: "border-color 0.2s",
      boxSizing: "border-box",
    },
    rememberRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
    },
    checkboxLabel: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      fontSize: "14px",
      color: "#6b7280",
    },
    checkbox: {
      width: "16px",
      height: "16px",
      cursor: "pointer",
      accentColor: "#667eea",
    },
    forgotLink: {
      fontSize: "14px",
      color: "#667eea",
      textDecoration: "none",
      cursor: "pointer",
    },
    loginButton: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#667eea",
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: 600,
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      marginBottom: "16px",
      transition: "background-color 0.2s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    loginButtonDisabled: {
      backgroundColor: "#e5e7eb",
      color: "#9ca3af",
      cursor: "not-allowed",
    },
    spinner: {
      width: "24px",
      height: "24px",
      border: "2px solid #ffffff",
      borderTopColor: "transparent",
      borderRadius: "50%",
      animation: "spin 0.6s linear infinite",
    },
    signUpText: {
      textAlign: "center",
      fontSize: "14px",
      color: "#6b7280",
    },
    signUpLink: {
      color: "#667eea",
      fontWeight: 600,
      textDecoration: "none",
      cursor: "pointer",
    },
    footer: {
      marginTop: "32px",
      textAlign: "center",
      fontSize: "12px",
      color: "#9ca3af",
    },
    rightSection: {
      width: "55%",
      height: "100%",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "48px",
      position: "relative",
    },
    rightContent: {
      color: "#ffffff",
      textAlign: "center",
      marginBottom: "32px",
    },
    rightHeading: {
      fontSize: "36px",
      fontWeight: 700,
      marginBottom: "16px",
      lineHeight: 1.3,
    },
    rightSubHeading: {
      fontSize: "16px",
      opacity: 0.95,
    },
    dashboardPreview: {
      width: "100%",
      maxWidth: "550px",
      backgroundColor: "#ffffff",
    
    },
    dashboardImage: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      display: "block",
    },
    brandLogos: {
      position: "absolute",
      bottom: "32px",
      display: "flex",
      gap: "24px",
      opacity: 0.8,
    },
    brandLogo: {
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: 500,
    },
  };

  return (
    <>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        input:focus {
          border-color: #667eea !important;
        }
        
        button:hover:not(:disabled) {
          opacity: 0.9;
        }
        
        a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div style={styles.container}>
        {/* Left Section - Login Form */}
        <div style={styles.leftSection}>
          <div style={styles.formContainer}>
            {/* <div style={styles.logoContainer}>
              <span style={styles.logoIcon}>⚡</span>
              <span style={styles.logoText}>KLK Ventures</span>
            </div> */}

            <h1 style={styles.heading}>Get Started Now</h1>
            <p style={styles.subHeading}>
              Enter your credentials to access your account
            </p>

            <div style={styles.socialButtons}>
              <button style={styles.socialButton}>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Log in with Google
              </button>
              <button style={styles.socialButton}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Log in with Apple
              </button>
            </div>

            <div style={styles.divider}>
              <div style={styles.dividerLine}></div>
              <span style={styles.dividerText}>or</span>
              <div style={styles.dividerLine}></div>
            </div>

            {error && (
              <div style={styles.errorMessage}>
                Something is wrong with your login or password
              </div>
            )}

            {/* <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            /> */}

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />

            <div style={styles.rememberRow}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  style={styles.checkbox}
                />
                I agree to the Terms & Privacy
              </label>
              <Link href="#" style={styles.forgotLink}>
                Forgot password?
              </Link>
            </div>

            <button
              onClick={handleLogin}
              disabled={isLoading || !email || !password}
              style={{
                ...styles.loginButton,
                ...(isLoading || !email || !password
                  ? styles.loginButtonDisabled
                  : {}),
              }}
            >
              {isLoading ? <div style={styles.spinner}></div> : "Login"}
            </button>

            <p style={styles.signUpText}>
              Have an account?{" "}
              <Link href="#" style={styles.signUpLink}>
                Sign in
              </Link>
            </p>

            <p style={styles.footer}>2025 klk. All right Reserved</p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div style={styles.rightSection}>
          <div style={styles.dashboardPreview}>
            <img
              src={myimg}
              alt="Dashboard Preview"
              style={styles.dashboardImage}
            />
          </div>

        
        </div>
      </div>
    </>
  );
}

export default ModernLogin;
