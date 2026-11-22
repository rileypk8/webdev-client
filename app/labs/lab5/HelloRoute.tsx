"use client";

import { useEffect, useState } from "react";
import * as client from "./client";

type Hello = { message?: string };

// Style 1: fetch().then().then() directly inside useEffect
function HelloStyle1() {
  const [hello, setHello] = useState<Hello>({});
  useEffect(() => {
    fetch("/api/lab5/hello")
      .then((response) => response.json())
      .then(setHello);
  }, []);
  return <pre id="wd-hello-route-1">{JSON.stringify(hello, null, 2)}</pre>;
}

// Style 2: the same chain in a named function called from useEffect
function HelloStyle2() {
  const [hello, setHello] = useState<Hello>({});
  const fetchHello = () => {
    fetch("/api/lab5/hello")
      .then((response) => response.json())
      .then(setHello);
  };
  useEffect(() => {
    fetchHello();
  }, []);
  return <pre id="wd-hello-route-2">{JSON.stringify(hello, null, 2)}</pre>;
}

// Style 3: the named function written with async/await. It is declared inside
// the effect so react-hooks/set-state-in-effect accepts it.
function HelloStyle3() {
  const [hello, setHello] = useState<Hello>({});
  useEffect(() => {
    const fetchHello = async () => {
      const response = await fetch("/api/lab5/hello");
      const data = await response.json();
      setHello(data);
    };
    fetchHello();
  }, []);
  return <pre id="wd-hello-route-3">{JSON.stringify(hello, null, 2)}</pre>;
}

// Style 4 (best practice): the URL lives in client.ts, the component only calls it
function HelloStyle4() {
  const [hello, setHello] = useState<Hello>({});
  useEffect(() => {
    client.fetchHello().then(setHello);
  }, []);
  return <pre id="wd-hello-route-4">{JSON.stringify(hello, null, 2)}</pre>;
}

export default function HelloRoute() {
  return (
    <div id="wd-hello-route">
      <h3>GET /api/lab5/hello (Next.js Route Handler)</h3>
      <h4>Style 1: fetch inside useEffect</h4>
      <HelloStyle1 />
      <h4>Style 2: named fetchHello</h4>
      <HelloStyle2 />
      <h4>Style 3: async fetchHello</h4>
      <HelloStyle3 />
      <h4>Style 4: client.fetchHello</h4>
      <HelloStyle4 />
      <hr />
    </div>
  );
}
