import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import CustomizeNavbar from '@/components/Contact/CustomizeNavbar';
import Header from '@/components/Contact/Header';
import Form from '@/components/Contact/Form';
import Footer from '@/components/Contact/Footer';


function PageContact() {

  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);


  return (
    <>
      <Head>
        <title>Arakawas - Contact Us</title>
      </Head>

      <Loader />
      <CustomizeNavbar mainBg />
      <main>
        <Header />
        <Form />
      </main>
      <Footer />
    </>
  )
}

// PageContact.getLayout = page => <Layout>{page}</Layout>

export default PageContact;