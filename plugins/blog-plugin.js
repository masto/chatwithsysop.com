// Thanks: https://kgajera.com/blog/display-recent-blog-posts-on-home-page-with-docusaurus/
// See alse: https://github.com/facebook/docusaurus/issues/4138#issuecomment-1703083513

const blogPluginExports = require("@docusaurus/plugin-content-blog");

const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginExtended(...pluginArgs) {
    const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);

    return {
        // Add all properties of the default blog plugin so existing functionality is preserved
        ...blogPluginInstance,
        /**
         * Override the default `contentLoaded` hook to access blog posts data
         */
        contentLoaded: async function (data) {
            // Get the latest blog posts
            const recentPosts = [...data.content.blogPosts].splice(0, 5);

            data.actions.addRoute({
                // Add route for the home page
                path: "/",
                exact: true,

                // The component to use for the "Home" page route
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

            // Call the default overridden `contentLoaded` implementation
            return blogPluginInstance.contentLoaded(data);
        },
    };
}

module.exports = {
    ...blogPluginExports,
    default: blogPluginExtended,
};
