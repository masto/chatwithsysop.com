// This plugin extends the default Docusaurus blog plugin to add a home page
// that displays the latest blog posts.

// Thanks: https://kgajera.com/blog/display-recent-blog-posts-on-home-page-with-docusaurus/
// See also: https://github.com/facebook/docusaurus/issues/4138#issuecomment-1703083513

import defaultBlogPlugin from "@docusaurus/plugin-content-blog";

export default async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);

  return {
    // Add all properties of the default blog plugin so existing functionality
    // is preserved.
    ...blogPluginInstance,

    // Custom home page that contains the latest blog posts.
    contentLoaded: async function (data) {
      // Get the latest blog posts
      const recentPosts = [...data.content.blogPosts].splice(0, 5);

      data.actions.addRoute({
        // Add route for the home page
        path: "/",
        exact: true,

        // The component to use for the home page route
        component: "@site/src/components/Home",

        // These are the props that will be passed to our "Home" page component
        modules: {
          recentPosts: recentPosts.map((post) => ({
            content: {
              __import: true,
              // The markdown file for the blog post will be loaded by webpack
              path: post.metadata.source,
              query: {
                truncated: true,
              },
            },
          })),
        },
      });

      // Call the base `contentLoaded` implementation to generate the standard
      // blog pages.
      return blogPluginInstance.contentLoaded(data);
    },
  };
}

// Export everything else from the default blog plugin for compatibility.
export * from "@docusaurus/plugin-content-blog";
