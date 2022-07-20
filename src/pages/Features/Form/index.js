import React from "react";

function Form() {
  return (
    <section className="section-form">
      <div className="container">
        <div className="form flex">
          <div className="form-content">
            <h2 className="section-title">Subscribe Newsletters</h2>
            <h4 className="section-sub-title">
              Enter your email address to register to our newsletter
            </h4>
          </div>
          <form className="form-sub">
            <input className="form-sub-input col-6" placeholder="Your Email" />
            <button className="btn-subscribe col-2">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
