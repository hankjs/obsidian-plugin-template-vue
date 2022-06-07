import { readFileSync, writeFileSync } from "fs";
import path from "path"
const __dirname = path.resolve();

const targetVersion = process.env.npm_package_version;

// read minAppVersion from manifest.json and bump version to target version
let manifest = JSON.parse(readFileSync(path.resolve(__dirname, "dist/manifest.json"), "utf8"));
const { minAppVersion } = manifest;
manifest.version = targetVersion;
writeFileSync(path.resolve(__dirname, "dist/manifest.json"), JSON.stringify(manifest, null, "\t"));

// update versions.json with target version and minAppVersion from manifest.json
let versions = JSON.parse(readFileSync(path.resolve(__dirname, "versions.json"), "utf8"));
versions[targetVersion] = minAppVersion;
writeFileSync(path.resolve(__dirname, "versions.json"), JSON.stringify(versions, null, "\t"));
