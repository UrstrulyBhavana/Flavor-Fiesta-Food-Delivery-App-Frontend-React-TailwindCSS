import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { FaHome, FaArrowLeft, FaRedoAlt } from "react-icons/fa";

const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate();

  const code = err?.status ?? 404;
  const text = err?.statusText ?? "Not Found";

  const friendly =
    {
      404: "We couldn’t find that page.",
      500: "Something broke on our side.",
      401: "You need to sign in to see this.",
      403: "You don’t have access to this page.",
    }[code] || "Something went wrong.";

  return (
    <main className="min-h-[70vh] w-full bg-white flex items-center justify-center px-4 py-12">
      <section className="max-w-xl w-full rounded-2xl shadow-lg border border-amber-200 overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 p-6">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Oops!
          </h1>
          <p className="text-slate-800/80 mt-1">Let’s get you back on track.</p>
        </div>

        <div className="bg-[#0b0d1c] text-white p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center justify-center rounded-full bg-amber-400 text-slate-900 w-14 h-14 text-2xl font-black shadow">
              {code}
            </span>
            <div>
              <h2 className="text-xl font-semibold">{friendly}</h2>
              <p className="text-sm text-gray-300">
                {text}
                {err?.data ? ` — ${String(err.data).slice(0, 140)}` : ""}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full bg-slate-700 hover:bg-slate-600 px-5 py-2.5 text-sm font-semibold shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <FaArrowLeft /> Go Back
            </button>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <FaRedoAlt /> Retry
            </button>

            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-5 py-2.5 text-sm font-bold text-white shadow hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
            >
              <FaHome /> Go Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Error;
