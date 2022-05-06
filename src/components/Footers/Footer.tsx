import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-slate-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-top mb-6 justify-between">
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">
                    Sitemap
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/facilities">
                        <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">
                          Facilities
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news">
                        <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">
                          News
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing">
                        <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">
                          Pricing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/squash-and-racketball">
                        <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">
                          Squash and Racketball
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">
                    Club documents
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">
                        Child Protection
                      </a>
                    </li>
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">
                        Covid Policy
                      </a>
                    </li>
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">
                        Diversity and Inclusively
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">
                    Useful Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="#test"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      >
                        SportyHQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#test"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      >
                        ESSA
                      </a>
                    </li>
                    <li>
                      <a
                        href="#test"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      >
                        Scottish Squash
                      </a>
                    </li>
                    <li>
                      <a
                        href="#test"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      >
                        Professional Squash Association
                      </a>
                    </li>
                    <li>
                      <a
                        href="#test"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      >
                        Rules of Squash
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-300" />
          <div className="flex flex-col flex-wrap items-center md:justify-between justify-center text-sm text-slate-500 font-semibold">
            <div className="w-full md:w-5/12 px-4 flex mx-auto justify-center gap-4">
              <Link href="/legal/cookies">
                <a>Cookies</a>
              </Link>
              <span>|</span>
              <Link href="/legal/privacy">
                <a>Privacy policy</a>
              </Link>
            </div>
            <div className="w-full md:w-5/12 px-4 mx-auto text-center">
              <div className="py-1">
                Copyright © {new Date().getFullYear()} Colinton Castle Squash
                Club by{" "}
                <a className="text-slate-500 hover:text-slate-800">
                  Adam Turner
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
