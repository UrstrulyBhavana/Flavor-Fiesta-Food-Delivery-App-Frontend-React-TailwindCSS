import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50 text-slate-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-200/60 to-transparent"
      />

      <section className="relative mx-auto max-w-6xl px-4 pt-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-200 p-8 md:p-10 shadow-lg">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-14 -bottom-14 h-40 w-40 rounded-full bg-white/30 blur-xl"
          />

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            About Us
          </h1>

          <p className="mt-3 max-w-3xl text-base md:text-lg leading-7 text-slate-700">
            Welcome to <span className="font-semibold">FlavorFiesta</span> — your
            friendly neighborhood food app bringing local flavors to your
            door. Discover, order, and enjoy food the premium way:{" "}
            <span className="font-semibold">simple</span>,{" "}
            <span className="font-semibold">fast</span>, and{" "}
            <span className="font-semibold">delightful</span>.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { k: "200+", v: "Partner Restaurants" },
              { k: "25k+", v: "Happy Customers" },
              { k: "4.7★", v: "Avg. Rating" },
              { k: "<30m", v: "Avg. Delivery" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl bg-white/70 backdrop-blur p-4 text-center shadow-sm transition hover:shadow-md border border-white/60"
              >
                <div className="text-xl font-extrabold text-slate-900">{s.k}</div>
                <div className="text-xs text-slate-600 whitespace-nowrap">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 mt-10 grid md:grid-cols-2 gap-6">
        <article className="group rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
            Our Mission
          </h2>
        <p className="mt-3 leading-7 text-slate-700">
            To connect people with great food—reliably and affordably. We
            obsess over convenience, speed, and quality so every order feels
            effortless and every bite tastes fresh.
          </p>
        </article>

        <article className="group rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
            What We Do
          </h2>
          <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700">
            <li>Curate top restaurants and home-grown brands near you.</li>
            <li>Show clear menus, ratings, prices, and delivery times.</li>
            <li>Enable quick search & smart filters (like Top Rated).</li>
            <li>Provide secure checkout and real-time order tracking.</li>
          </ul>
        </article>
      </section>
      
      <section className="mx-auto max-w-6xl px-4 mt-10">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">How It Works</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: "1", title: "Browse", desc: "Find cuisines you love." },
            { step: "2", title: "Choose", desc: "Pick dishes & add to cart." },
            { step: "3", title: "Checkout", desc: "Pay securely in seconds." },
            { step: "4", title: "Enjoy", desc: "Track delivery—dig in!" },
          ].map((s) => (
            <div
              key={s.step}
              className="group rounded-2xl bg-white p-6 shadow-sm text-center transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mx-auto mb-3 h-10 w-10 grid place-items-center rounded-full bg-amber-100 font-bold group-hover:bg-amber-200 transition">
                {s.step}
              </div>
              <h4 className="font-semibold text-slate-900">{s.title}</h4>
              <p className="text-sm mt-1 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 mt-12 md:mt-14">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">Our Values</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Quality First",
              desc: "Partnering with verified kitchens and chefs.",
              icon: (
                <svg className="h-5 w-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
                  <path d="M10.5 13.5l-1.5-1.5 1.06-1.06L10.5 11.38l3.44-3.44L15 9l-4.5 4.5z" fill="white" />
                </svg>
              ),
            },
            {
              title: "Customer Love",
              desc: "Clear pricing, honest ratings, on-time delivery.",
              icon: (
                <svg className="h-5 w-5 text-rose-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 21s-7-4.35-9.33-8A5.5 5.5 0 1112 7a5.5 5.5 0 119.33 6C19 16.65 12 21 12 21z" />
                </svg>
              ),
            },
            {
              title: "Local First",
              desc: "We celebrate neighborhood restaurants & small businesses.",
              icon: (
                <svg className="h-5 w-5 text-teal-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7zm0 9a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              ),
            },
          ].map((v) => (
            <div
              key={v.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md flex items-center gap-3"
            >
              <div className="shrink-0">{v.icon}</div>
              <div>
                <h4 className="font-semibold text-slate-900">{v.title}</h4>
                <p className="text-sm mt-1 text-slate-600">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 mt-12">
        <div className="rounded-2xl bg-white p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <p className="text-sm text-slate-700">
              Secure payments • Live order tracking • 24×7 support
            </p>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="rounded-full bg-amber-100 px-3 py-1 ring-1 ring-amber-200">UPI / Cards / COD</span>
            <span className="rounded-full bg-amber-100 px-3 py-1 ring-1 ring-amber-200">GST Invoices</span>
            <span className="rounded-full bg-amber-100 px-3 py-1 ring-1 ring-amber-200">Food-Safe Partners</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 mt-12 pb-14">
        <div className="rounded-3xl bg-gradient-to-r from-amber-200 to-yellow-200 p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">Have feedback or a query?</h3>
            <p className="text-sm mt-1 text-slate-700">
              We’d love to hear from you. Your suggestions help us improve.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-block rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white hover:bg-amber-600 active:scale-[.98] transition shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
