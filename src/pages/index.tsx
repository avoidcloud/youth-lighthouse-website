import { AppHead } from "@/components/AppHead";

export default function Home() {
  return (
    <>
      <AppHead />
      <div
        style={{
          backgroundColor: "black",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              maxWidth: 800,
              maxHeight: 800,
              height: "auto",
              width: "auto",
            }}
            src="https://static.logiqbits.com/cms/temp/as25fbu5psftkuoqmz2mob8hvm5ucm-1734605633924-631141466youth-lighthouse.jpg"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <a
            style={{
              border: "1px solid white",
              borderRadius: "10px",
              fontSize: "2rem",
              padding: "0.8rem 1rem",
            }}
            href="https://www.facebook.com/profile.php?id=61570050916137"
          >
            Join Us On Facebook
          </a>

          <a
            style={{
              border: "1px solid white",
              borderRadius: "10px",
              fontSize: "2rem",
              padding: "0.8rem 1rem",
              marginLeft: "1rem",
            }}
            href="mailto:contact.youthlighthouse@gmail.com"
          >
            Contact Us
          </a>
        </div>

        <h1
          style={{
            fontWeight: "bolder",
            textAlign: "center",
            fontSize: "5rem",
          }}
        >
          Youth Light House
        </h1>

        <h3
          style={{
            fontWeight: "bolder",
            textAlign: "center",
            fontSize: "3rem",
            paddingTop: "2rem",
            paddingBottom: "5rem",
          }}
        >
          Website will be updated soon.
        </h3>
      </div>
    </>
  );
}
