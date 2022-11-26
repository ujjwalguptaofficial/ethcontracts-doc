import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Based on openzeppelin standard',
    Svg: require('@site/static/img/open_zepplin.png').default,
    description: (
      <>
        All contract implementation is based on openzeppelin contracts and will be updated in future aligning with openzeppelin.
      </>
    ),
  },
  {
    title: 'Supports for multiple ethers client ',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        You can use your favourite ethereum library without any issue or any work. Currently we are supporting ethers and web3.js.
      </>
    ),
  },
  {
    title: 'Tested',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        All implementation are tested from end to end for different edge cases. So you only need to focus on business logic not writing code for smart contract calls.
      </>
    ),
  },
  {
    title: 'Extensible',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        You can easily customize the contracts implementation as per your need.
      </>
    ),
  },
  {
    title: 'Automatic ABI management',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        No need to worry about ABI. We handle it internally with flexibility to customize if needed - making everything super easy
      </>
    ),
  },
  {
    title: 'Treeshakable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our package is Treeshakable - Only used codes will be included.
      </>
    ),
  },
  {
    title: 'Free and MIT License',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Everything is free and open source with MIT License. Use it without worry.
      </>
    ),
  },
  {
    title: 'Strong typescript support',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We understand the importance of typings and that's why we provide very strong typings support.
      </>
    ),
  },
];

function Feature({ title, Svg, description, Img }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{ marginBottom: '4rem' }}>
        {/* Img!=null? <img src="Img" />: <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div >
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
