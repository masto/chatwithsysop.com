import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BlogPostItem from "@theme/BlogPostItem";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home({ recentPosts }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description="Chris Masto's web site">
      <HomepageHeader />
      <main>
        <div className="container margin-top--xl margin-bottom--lg">
          <div className="row">
            <div className="col col--9 col--offset-1">
              {recentPosts.map(({ content: BlogPostContent }) => (
                <BlogPostProvider
                  key={BlogPostContent.metadata.permalink}
                  content={BlogPostContent}
                >
                  <BlogPostItem>
                    <BlogPostContent />
                  </BlogPostItem>
                </BlogPostProvider>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
