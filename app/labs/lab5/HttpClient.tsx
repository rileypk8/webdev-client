"use client";

import { useState } from "react";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const fetchWelcomeOnClick = async () => {
    const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
    setWelcomeOnClick(response.data);
  };
  return (
    <div id="wd-http-client">
      <h3>HTTP Client</h3>
      <h4>Requesting on Click</h4>
      <button
        id="wd-fetch-welcome"
        type="button"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={fetchWelcomeOnClick}
      >
        Fetch Welcome
      </button>
      <p>
        Response from server: <b id="wd-welcome-on-click">{welcomeOnClick}</b>
      </p>
      <hr />
    </div>
  );
}
