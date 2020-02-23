import React from "react";

const Modal = () => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Privacy & Policy
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <div
                  className="privacy-policy-hading"
                  style={{ textAlign: "center" }}
                >
                  {/* <h1>privacy policy</h1> */}
                </div>
                <div>
                  <p>
                    This Privacy Policy governs the manner in which
                    w3layouts.com collects, uses, maintains and discloses
                    information collected from users (each, a “User”) of the
                    w3layouts.com website (“Site”). This privacy policy applies
                    to the Site and all products and services offered by
                    w3layouts.com
                  </p>

                  <h6>Personal identification information</h6>
                  <p>
                    We may collect personal identification information from
                    Users in a variety of ways, including, but not limited to,
                    when Users visit our site, register on the site, place an
                    order, subscribe to the newsletter, and in connection with
                    other activities, services, features or resources we make
                    available on our Site. Users may be asked for, as
                    appropriate, name, email address. We will collect personal
                    identification information from Users only if they
                    voluntarily submit such information to us. Users can always
                    refuse to supply personally identification information,
                    except that it may prevent them from engaging in certain
                    Site related activities.
                  </p>

                  <h6>Non-personal identification information</h6>
                  <p>
                    type of computer and technical information about Users means
                    of connection to our Site, such as the operating system and
                    the Internet service providers utilized and other similar
                    information.
                  </p>

                  <h6>Web browser cookies</h6>
                  <p>
                    Our Site may use “cookies” to enhance User experience.
                    User’s web browser places cookies on their hard drive for
                    record-keeping purposes and sometimes to track information
                    about them. User may choose to set their web browser to
                    refuse cookies, or to alert you when cookies are being sent.
                    If they do so, note that some parts of the Site may not
                    function properly.
                  </p>

                  <h6>How we use collected information</h6>
                  <p>
                    w3layouts.com may collect and use Users personal information
                    for the following purposes: – To improve customer service
                    Information you provide helps us respond to your customer
                    service requests and support needs more efficiently. – To
                    personalize user experience We may use information in the
                    aggregate to understand how our Users as a group use the
                    services and resources provided on our Site. – To improve
                    our Site We may use feedback you provide to improve our
                    products and services. – To send periodic emails We may use
                    the email address to send User information and updates
                    pertaining to their order. It may also be used to respond to
                    their inquiries, questions, and/or other requests. If User
                    decides to opt-in to our mailing list, they will receive
                    emails that may include company news, updates, related
                    product or service information, etc. If at any time the User
                    would like to unsubscribe from receiving future emails, we
                    include detailed unsubscribe instructions at the bottom of
                    each email.
                  </p>

                  <h6>How we protect your information</h6>
                  <p>
                    We adopt appropriate data collection, storage and processing
                    practices and security measures to protect against
                    unauthorized access, alteration, disclosure or destruction
                    of your personal information, username, password,
                    transaction information and data stored on our Site.
                  </p>
                  <p>
                    Our Site is in compliance with PCI vulnerability standards
                    in order to create as secure of an environment as possible
                    for Users.
                  </p>

                  <h6>Sharing your personal information</h6>
                  <p>
                    We do not sell, trade, or rent Users personal identification
                    information to others. We may share generic aggregated
                    demographic information not linked to any personal
                    identification information regarding visitors and users with
                    our business partners, trusted affiliates and advertisers
                    for the purposes outlined above.We may use third party
                    service providers to help us operate our business and the
                    Site or administer activities on our behalf, such as sending
                    out newsletters or surveys. We may share your information
                    with these third parties for those limited purposes provided
                    that you have given us your permission.
                  </p>

                  <h6>Advertising</h6>
                  <p>
                    Ads appearing on our site may be delivered to Users by
                    advertising partners, who may set cookies. These cookies
                    allow the ad server to recognize your computer each time
                    they send you an online advertisement to compile non
                    personal identification information about you or others who
                    use your computer. This information allows ad networks to,
                    among other things, deliver targeted advertisements that
                    they believe will be of most interest to you. This privacy
                    policy does not cover the use of cookies by any advertisers.
                  </p>

                  <h6>Google Adsense</h6>
                  <p>
                    Some of the ads may be served by Google. Google’s use of the
                    DART cookie enables it to serve ads to Users based on their
                    visit to our Site and other sites on the Internet. DART uses
                    “non personally identifiable information” and does NOT track
                    personal information about you, such as your name, email
                    address, physical address, etc. You may opt out of the use
                    of the DART cookie by visiting the Google ad and content
                    network privacy policy at
                    http://www.google.com/privacy_ads.html
                  </p>

                  <h6>Changes to this privacy policy</h6>
                  <p>
                    w3layouts.com has the discretion to update this privacy
                    policy at any time. When we do, we will revise the updated
                    date at the bottom of this page and send you an email. We
                    encourage Users to frequently check this page for any
                    changes to stay informed about how we are helping to protect
                    the personal information we collect. You acknowledge and
                    agree that it is your responsibility to review this privacy
                    policy periodically and become aware of modifications.
                  </p>

                  <h6>Your acceptance of these terms</h6>
                  <p>
                    By using this Site, you signify your acceptance of this
                    policy and terms of service. If you do not agree to this
                    policy, please do not use our Site. Your continued use of
                    the Site following the posting of changes to this policy
                    will be deemed your acceptance of those changes.
                  </p>

                  <h6>Contacting us</h6>
                  <p>
                    If you have any questions about this Privacy Policy, the
                    practices of this site, or your dealings with this site,
                    please contact us at: w3layouts.com
                  </p>

                  <p>gile Information Technologies</p>
                  <p>26-2-291,G-1,</p>
                  <p>Vedayapalem Railway Station Road,</p>
                  <p>Vedayapalem Railway Station Road,</p>
                  <p>Andhra Pradesh, India</p>
                  <p>+91-9611234961</p>
                  <p>support@w3layouts.com</p>
                  <br />
                  <p>This document was last updated on April 11, 2014</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
