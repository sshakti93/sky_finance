import React from "react";
import "./Tos.css";
import Link from "next/link";
import Headerpage from "@/app/Components/Headerpage/Headerpage";
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
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="tos-title">
          <p>
            Terms of use<span className="sky-inbtw">.</span>
          </p>
        </div>
        <div className="tos-desc">
          {/* left section of the pointers */}

          <div className="tos-left">
            <div className="grid-tos">
              <div className="grid-title">
                <p>Acceptance of Terms</p>
              </div>
              <div className="grid-desc">
                <p>
                  By accessing this website, you agree to be bound by these
                  terms and conditions of use.
                </p>
              </div>
            </div>

            {/* second row */}

            <div className="grid-tos">
              <div className="grid-title">
                <p>Use of Information</p>
              </div>
              <div className="grid-desc">
                <p>
                  The information provided on this website is for general
                  informational purposes only and should not be construed as
                  professional advice. We recommend consulting with a licensed
                  insurance agent or financial advisor regarding specific
                  insurance needs.
                </p>
              </div>
            </div>

            {/* third row */}

            <div className="grid-tos">
              <div className="grid-title">
                <p>Privacy Policy</p>
              </div>
              <div className="grid-desc">
                <p>
                  Your privacy is important to us. Please review our Privacy
                  Policy to understand how we collect, use, and safeguard your
                  personal information.
                </p>
              </div>
            </div>

            {/* fourth row */}

            <div className="grid-tos">
              <div className="grid-title">
                <p>Third-Party Links</p>
              </div>
              <div className="grid-desc">
                <p>
                  This website may contain links to third-party websites for
                  your convenience. We do not endorse or control the content of
                  these websites and are not responsible for any information or
                  services provided by them.
                </p>
              </div>
            </div>
          </div>

          {/* right section of the pointers */}

          <div className="tos-left">
            <div className="grid-tos">
              <div className="grid-title">
                <p>Limitation of Liability</p>
              </div>
              <div className="grid-desc">
                <p>
                  We shall not be liable for any direct, indirect, incidental,
                  special, or consequential damages arising out of or in any way
                  connected with the use of this website.
                </p>
              </div>
            </div>
            {/* second row */}

            <div className="grid-tos">
              <div className="grid-title">
                <p>Accuracy of Information</p>
              </div>
              <div className="grid-desc">
                <p>
                  We strive to ensure the accuracy and timeliness of information
                  presented on this website. However, we make no warranties or
                  representations regarding the accuracy, completeness, or
                  reliability of any information provided.
                </p>
              </div>
            </div>

            {/* third row */}

            <div className="grid-tos">
              <div className="grid-title">
                <p>Intellectual Property</p>
              </div>
              <div className="grid-desc">
                <p>
                  All content, logos, and trademarks displayed on this website
                  are the property of their respective owners and may not be
                  used without prior written permission.
                </p>
              </div>
            </div>

            {/* fourth row */}

            <div className="grid-tos">
              <div className="grid-title">
                <p>Changes to Terms</p>
              </div>
              <div className="grid-desc">
                <p>
                  We reserve the right to modify or update these terms and
                  conditions at any time without prior notice. Your continued
                  use of the website after such changes constitutes acceptance
                  of the updated terms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
