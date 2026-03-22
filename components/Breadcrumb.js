import Link from "next/link";

export default function Breadcrumb({ current }) {
  return (
    <div className="breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__option">
              <Link href="/">
                <span className="fa fa-home" /> Home
              </Link>
              <span>{current}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
