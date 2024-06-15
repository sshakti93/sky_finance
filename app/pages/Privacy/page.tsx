import React from "react";
import Headerpage from "@/app/Components/Headerpage/Headerpage";
import Link from "next/link";
import "./Privacy.css";

export default function page() {
  return (
    <div className="tos-page">
      <Headerpage />
      <div className="tos-full">
        <div className="home-nav">
          <div className="home-link">
            <Link href={"/"}>
              <p>Home</p>
            </Link>
          </div>
          <div className="greater-than">
            <p>&gt;</p>
          </div>
          <div className="terms-cond">
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="tos-title">
          <p>
            Privacy & Other policies<span className="sky-inbtw">.</span>
          </p>
        </div>

        <div className="privacy-defn">
          <p>
            At <span className="sky-inbtw">SKY FINANCIAL</span>, we are
            committed to protecting your privacy and ensuring the security of
            your personal information. This Privacy Policy outlines how we
            collect, use, and safeguard your data when you visit our website or
            interact with our services.
          </p>
        </div>
        <div className="tos-desc">
          {/* left section of the pointers */}

          <div className="tos-left">
            <div className="grid-tos">
              <div className="grid-title">
                <p>Information Collection</p>
              </div>
              <div className="grid-desc">
                <p>
                  We collect personal information such as name, contact details,
                  and demographic data when you voluntarily provide it to us.
                  Additionally, we may automatically collect certain information
                  through cookies and similar technologies to enhance your
                  browsing experience.
                </p>
              </div>
            </div>

            {/* second row */}

            <div className="grid-tos">
              <div className="grid-title">
                <p>Data Security</p>
              </div>
              <div className="grid-desc">
                <p>
                  We employ industry-standard security measures to protect your
                  personal information from unauthorized access, disclosure,
                  alteration, or destruction. However, no method of transmission
                  over the internet or electronic storage is completely secure,
                  and we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* third row */}

            <div className="grid-tos">
              <div className="grid-title">
                <p>Your Rights</p>
              </div>
              <div className="grid-desc">
                <p>
                  You have the right to access, correct, or delete your personal
                  information held by us. You may also opt out of receiving
                  marketing communications from us at any time.
                </p>
              </div>
            </div>
          </div>

          {/* right section of the pointers */}

          <div className="tos-left">
            <div className="grid-tos">
              <div className="grid-title">
                <p>Use of Information</p>
              </div>
              <div className="grid-desc">
                <p>
                  We use the information we collect to provide you with the
                  products and services you request, personalize your
                  experience, and communicate with you about relevant offers and
                  updates. Your data may also be used for internal purposes such
                  as analytics and improving our services.
                </p>
              </div>
            </div>
            {/* second row */}

            <div className="grid-tos">
              <div className="grid-title">
                <p>Third-Party Disclosure</p>
              </div>
              <div className="grid-desc">
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to outside parties without your consent, except as
                  required by law or to trusted third parties who assist us in
                  operating our website or servicing you.
                </p>
              </div>
            </div>

            {/* third row */}

            <div className="grid-tos">
              <div className="grid-title">
                <p>Policy Updates</p>
              </div>
              <div className="grid-desc">
                <p>
                  We may update this Privacy Policy periodically to reflect
                  changes in our practices or legal requirements. We encourage
                  you to review this page regularly for any updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
