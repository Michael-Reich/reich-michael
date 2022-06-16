import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

function Sedcard() {
  const createDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sedcard_Michael-Reich_2022.pdf";
    link.setAttribute("download", `Sedcard_Michael-Reich_2022.pdf`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  useEffect(() => {
    setTimeout(createDownload, 2000);
  }, []);
  return (
    <div className={"my-4"}>
      <Container>
        <h1>Sedcard Download</h1>
        <p>Download starts in 2 Seconds...</p>
        <p>
          <small>
            If you have trouble starting the download, please click{" "}
            <a href="/Sedcard_Michael-Reich_2022.pdf" download>
              here
            </a>
          </small>
        </p>
      </Container>
    </div>
  );
}

export default Sedcard;
