module.exports = function (eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "/" });
  eleventyConfig.addPassthroughCopy("news/**/*.{jpg,jpeg,png,gif,webp,svg}");
  eleventyConfig.addPassthroughCopy({ "src/.well-known": ".well-known" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  // Ignore non-content markdown at root
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("CONTRIBUTING.md");
  eleventyConfig.ignores.add("SKILL.md");

  // Date filters
  eleventyConfig.addFilter("isoDate", (date) =>
    new Date(date).toISOString().split("T")[0]
  );

  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  eleventyConfig.addFilter("toISOString", (date) =>
    new Date(date).toISOString()
  );

  // Reading time
  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return 1;
    const words = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  });

  // Group articles by date (returns [[dateStr, articles[]]] sorted newest first)
  eleventyConfig.addFilter("groupByDate", (articles) => {
    const groups = {};
    for (const a of articles) {
      const d = a.data.date;
      const key = d instanceof Date ? d.toISOString().split("T")[0] : String(d);
      if (!groups[key]) groups[key] = [];
      groups[key].push(a);
    }
    return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]));
  });

  // Open external links in new tab (compile-time transform)
  eleventyConfig.addTransform("externalLinks", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(
        /<a\s+href="(https?:\/\/[^"]+)"/g,
        (match, url) => {
          if (url.includes("news.800.works")) return match;
          return `<a href="${url}" target="_blank" rel="noopener noreferrer"`;
        }
      );
    }
    return content;
  });

  // Sorted article collection
  eleventyConfig.addCollection("article", (api) =>
    api
      .getFilteredByGlob("news/*/*/index.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  );

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "src/_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
