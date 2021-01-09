// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/apis/v1/:path*",
        destination: "https://coda.io/apis/v1/:path*",
      }
    ]
  },
}

// { source: "/api/:path*", destination: "http://localhost:8000/:path*" },

  // {
      //   source: "/v0/:path*",
      //   destination: "https://api.airtable.com/v0/:path*",
      // },