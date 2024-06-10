import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({ json, request, params }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhMzY4ODMxLTlkYjYtNDY4OC05MmNhLTJlYTQyYzlkNmU1ZSIsImVtYWlsIjoiYWRtaW5AcmguY29tIiwicm9sIjoiQURNSU4iLCJkbmkiOjg1Njc5NDEyLCJpYXQiOjE3MTc5NzIwNDcsImV4cCI6MTcxODA1ODQ0N30.1zmt8ZbMhK7Aipa3U8YU_WmntP2vz1J1cNMLGSD8LAk";

  try {
    const res = await fetch(
      `http://localhost:3000/api/v1/licenseAplication/${params.id}`,
      {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();
    json(res.status, data);
  } catch (error) {
    console.log(error);
  }
};

export const onPatch: RequestHandler = async ({ json, request, params }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhMzY4ODMxLTlkYjYtNDY4OC05MmNhLTJlYTQyYzlkNmU1ZSIsImVtYWlsIjoiYWRtaW5AcmguY29tIiwicm9sIjoiQURNSU4iLCJkbmkiOjg1Njc5NDEyLCJpYXQiOjE3MTgwNDg0MzksImV4cCI6MTcxODEzNDgzOX0.MJlmQjUy4IzRYO03E8lb6bhipcsJQrPVtSJI5ZEmu04";
  try {
    const res = await fetch(
      `http://localhost:3000/api/v1/licenseAplication/${params.id}`,
      {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(request.body),
      },
    );
    const data = await res.json();
    json(res.status, data);
  } catch (error) {
    console.log(error);
  }
};
