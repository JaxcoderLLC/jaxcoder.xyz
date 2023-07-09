import Head from "next/head";
import { useState } from "react";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Layout>
      <Head>
        <title>{`<jaxcoder.xyz />`}</title>
      </Head>
      <Container>
        <Navbar />
        <TabHeader
          tabs={["Submit Attestation", "My Attestations", "Resolutions"]}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <TabContainer activeTab={activeTab} />
      </Container>
    </Layout>
  );
}

const TabHeader = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <div className="flex justify-between bg-red-400 mb-4 border rounded-md m-6 p-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className="text-white hover:bg-red-200 hover:text-red-600 active:bg-blue active:text-white active:border rounded-md px-3 py-2"
          onClick={() => {
            setActiveTab(index);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

const TabContainer = ({ activeTab }) => {
  return (
    <div className="m-6 p-4 border border-red-400 rounded-md">
      <div className={`${activeTab === 0 ? "flex" : "hidden"} m-6 p-4 border-bottom`}>
        <h1>Submit Attestation</h1>
      </div>
      <div className={`${activeTab === 1 ? "flex" : "hidden"} m-6 p-4 border-bottom`}>
        <h1>My Attestations</h1>
      </div>
      <div className={`${activeTab === 2 ? "flex" : "hidden"} m-6 p-4 border-bottom `}>
        <h1>Resolutions</h1>
      </div>
    </div>
  );
};
