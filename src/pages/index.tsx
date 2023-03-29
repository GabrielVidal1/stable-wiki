import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import Card from "../components/card";

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

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Stable diffusion wiki">
      <HomepageHeader />
      <main>
        <div className="container p-5">
          <div className="py-4">
            <div className="flex p-4">
              <div className="p-8 flex-1" style={{ minWidth: "300px" }}>
                <h2 className="text-center">What is Stable Diffusion?</h2>
                <p>
                  Stable Diffusion is a deep learning, text-to-image model
                  released in 2022. Now, it can be used to generate images,
                  videos, music and much more from text descriptions, other
                  images.
                </p>
              </div>
              <img
                className="flex-grow"
                src="https://via.placeholder.com/700x300"
                alt="Stable Diffusion"
              />
            </div>

            <div className="flex p-4">
              <img
                className="flex-grow"
                src="https://via.placeholder.com/700x300"
                alt="Stable Diffusion"
              />
              <div className="p-8 flex-1" style={{ minWidth: "300px" }}>
                <h2 className="text-center">
                  What is the Stable Diffusion Wiki?
                </h2>
                <p>
                  The Stable Diffusion Wiki is a community-driven project that
                  aims to provide a comprehensive documentation of the Stable
                  Diffusion model.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-5xl">How to browse this wiki</h1>
        <div className="container p-5">
          <div className="flex gap-4 py-4 flex-wrap">
            <Card
              link="/docs/stable-diffusion"
              title="Mechanics"
              image="https://via.placeholder.com/150"
              description="Mechanics are the the core building blocks of Stable Diffusion, including text encoders, autoencoders, diffusers, and more. Dive deep into each component to understand how it works in detail and discover how to build new tools and workflows to improve control and quality."
            />
            <Card
              link="/dynamics/intro"
              title="Dynamics"
              image="https://via.placeholder.com/150"
              description="How to assemble the different building blocks to create features such as text-to-image or image-to-image. Learn how to combine these blocks to achieve your desired output."
            />
            <Card
              title="Parameters"
              link="/parameters/intro"
              image="https://via.placeholder.com/150"
              description="Parameters and their effects on Stable Diffusion processes. Gain insight into how parameters impact the final generated image or video."
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
