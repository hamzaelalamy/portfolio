import React from 'react';

type LinkProp = {
  url: string;
  label: string;
};

const Link = ({ url, label }: LinkProp) => {
  return (
    <span className="inline-block text-2xl uppercase cursor-pointer link-hover-animation">
      <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
    </span>
  );
};

const Contact = () => {
  return (
    <section className="mx-40 h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">
        I am available now to work on projects
      </h1>
      <div className="h-10"></div>
      <h1 className="text-6xl leading-snug uppercase font-medium cursor-pointer link-hover-animation">
        <a href="mailto:hamzaelalamy45@gmail.com">Send me an email</a>
      </h1>
      <div className="h-40"></div>
      <span className="flex flex-row items-start space-x-10">
        <Link url="https://github.com/hamzaelalamy" label="Github" />
        {/* <Link url="https://www.instagram.com" label="Instagram" />
        <Link url="https://www.twitter.com" label="Twitter" /> */}
        <Link url="https://www.linkedin.com/in/hamza-el-alamy" label="LinkedIn" />
      </span>
    </section>
  );
};

export default Contact;
