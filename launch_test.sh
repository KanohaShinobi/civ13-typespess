#!/bin/bash
cd maps
npx ts-node mapgen.ts
cd -
cd client
echo npx ts-node compile.ts
cd -
npx ts-node index.js test