import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@d-via/design-system'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/@d-via\/design-system/,
      use: {
        loader: 'string-replace-loader',
        options: {
          search: 'import React, { useState, useEffect, useRef } from \'react\';',
          replace: '"use client";\nimport React, { useState, useEffect, useRef } from \'react\';',
        },
      },
    });
    return config;
  },
};

export default nextConfig;
