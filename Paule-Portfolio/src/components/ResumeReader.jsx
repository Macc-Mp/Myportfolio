import '../css/ResumeReader.css';
const PDF_PATH = '/upload-resume/paule-resume.pdf';

export default function ResumeReader() {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>

        <div className='resume-actions'>
          <a className='tab1'
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in new tab
          </a>

          <a className='tab2'
            href={PDF_PATH}
            download="paule-resume.pdf"
          >
            Download PDF
          </a>
        </div>

        {/* <div className='resume-iframe'>
          <iframe className='res-iframe-container'
            src={PDF_PATH}
            title="Paule Resume"
          >
            <p className='res-iframe-p'>
              Your browser does not support PDFs. Download the file:
              <a href={PDF_PATH} download className='res-iframe-link'>Download resume</a>
            </p>
          </iframe>
        </div> */}
      </div>
    </section>
  );
}