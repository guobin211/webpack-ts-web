import type { Express } from "express";
import createProxyMiddleware from "http-proxy-middleware";

const target = "https://test.com";

export default function webpackProxy(server: Express) {
  server.use(
    "/api-test",
    createProxyMiddleware({ target, changeOrigin: true })
  );
  server.use(
    "/api-pre-release",
    createProxyMiddleware({ target, changeOrigin: true })
  );
  server.use("/api", createProxyMiddleware({ target, changeOrigin: true }));
}
