import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <script src="https://w.behold.so/widget.js" type="module"></script>
    </>
  );
}

export default MyApp;
