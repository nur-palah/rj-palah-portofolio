import React from 'react';
import DocumentMeta from 'react-document-meta';
import AOS from 'aos';
import Header from './section/header';
import Body from './section/body';
import Footer from './section/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'aos/dist/aos.css';

function App() {
  const meta = {
    title: 'Palah | Freelance Web Developer',
    description: 'Made for personal galleries and as a portfolio as a web developer. Ready to help your business online, meet the needs for making web apps, portfolios, company profiles, landing pages, and so on.',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      }
    }
  };
  return (
    <DocumentMeta {...meta}>
      <div className='outer'>
        <Header /> <Body /> <Footer />
      </div>
    </DocumentMeta>
  );
}

AOS.init();

export default App;
