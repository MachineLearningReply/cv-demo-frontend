import Heading from "components/demo/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";
import { useState } from 'react';

const API_BASEURL = "http://localhost:5000/api";

async function uploadVideo(event, filename, setLoading) {

  const formData = new FormData();
  console.log('event', event)
  Array.from(event.target.files).forEach((file: any) => {
    formData.append(event.target.name, file);
  });
  const config = { 'content-type': 'multipart/form-data'};

  formData.append('file', filename);
  const res = await fetch(`${API_BASEURL}/upload`, {
    method: 'POST',
    body: formData,
    headers: config
  })
  const json = await res.json()
  console.log(json)
}

function projects() {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <Page
      currentPage="Hello"
      meta={{ title: "Hello", desc: "Hello" }}
    >
      <Heading />
        {loading ? <p>Loading...</p> : <p>Upload a video</p>}
        <input type="file" multiple="true" className="w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100"
        onChange={(event) => uploadVideo(event, file, setLoading) }
        />

      {/* <Projects /> */}
      {/* <More /> */}
    </Page>
  );
}

export default projects;
