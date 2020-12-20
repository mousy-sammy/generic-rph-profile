import React from "react";
import { BasicTabLayout } from "./layouts/basic-tab-layout";

export const Profile: React.FunctionComponent = () => (
  <div>
    <BasicTabLayout
      tabs={[
        {
          name: "General",
          content: <>Lorem ipsum dolar</>,
        },
        {
          name: "Other",
          content: (
            <>
              Other stuff Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Veritatis quia dolorem, corporis mollitia adipisci expedita
              minima velit nihil quos unde enim, perspiciatis deserunt
              voluptatibus eligendi impedit iusto ex commodi voluptatum.
            </>
          ),
        },
      ]}
    />
    <style jsx>{`
      div {
        padding: 30px 0 0;
        background: #ccc;
      }
    `}</style>
    <style jsx global>{`
      body {
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: 13px;
        padding: 0;
        margin: 0;
      }
    `}</style>
  </div>
);
