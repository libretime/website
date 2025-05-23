import * as fs from "fs";
import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";
import { extractSitemapPathnames, pathnameToArgosName } from "./utils";

// Constants
const siteUrl = "http://localhost:3000";
const sitemapPath = "../build/sitemap.xml";
const stylesheetPath = "./screenshot.css";
const stylesheet = fs.readFileSync(stylesheetPath).toString();

// Wait for hydration, requires Docusaurus v2.4.3+
// Docusaurus adds a <html data-has-hydrated="true"> once hydrated
// See https://github.com/facebook/docusaurus/pull/9256
function waitForDocusaurusHydration() {
  return document.documentElement.dataset.hasHydrated === "true";
}

// Do not screenshot versioned docs
function isVersionedDocsPathname(pathname: string): boolean {
  return pathname.match(/^\/docs\/(?!next\/)(.*?)\//);
}

function screenshotPathname(pathname: string) {
  test(`pathname ${pathname}`, async ({ page }) => {
    const url = siteUrl + pathname;
    await page.goto(url);
    await page.waitForFunction(waitForDocusaurusHydration);
    await page.addStyleTag({ content: stylesheet });
    await argosScreenshot(page, pathnameToArgosName(pathname));
  });
}

test.describe("Docusaurus site screenshots", () => {
  const pathnames = extractSitemapPathnames(sitemapPath).filter(
    isVersionedDocsPathname,
  );
  console.log("Pathnames to screenshot:", pathnames);
  pathnames.forEach(screenshotPathname);
});
