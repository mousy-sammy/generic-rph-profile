import React from "react";
import { Gallery } from "./components/gallery";
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
          name: "Gallery",
          content: (
            <Gallery
              imageUrls={[
                "http://i.imgur.com/bjYj80i.jpg",
                "http://i.imgur.com/kFQU7aN.jpg",
                "http://i.imgur.com/MYY2f.jpg",
                "http://i.imgur.com/WdxKt.jpg",
                "http://i.imgur.com/DByzd.jpg",
                "http://i.imgur.com/hX9YAKY.jpg",
                "http://i.imgur.com/PrCUovK.jpg",
                "http://i.imgur.com/mJ8rpWk.jpg",
                "http://i.imgur.com/u4FQFII.jpg",                
                //   http://gelbooru.com/index.php?page=post&s=view&id=2629578
                //   http://gelbooru.com/index.php?page=post&s=view&id=2824967
                //   http://gelbooru.com/index.php?page=post&s=view&id=2766644
                //   http://gelbooru.com/index.php?page=post&s=view&id=2930464
                //   http://gelbooru.com/index.php?page=post&s=view&id=2983283
                //   http://gelbooru.com/index.php?page=post&s=view&id=3031002
                //   http://gelbooru.com/index.php?page=post&s=view&id=3011796
                //   http://gelbooru.com/index.php?page=post&s=view&id=2245986
                //   http://gelbooru.com/index.php?page=post&s=view&id=2456460
              ]}
            />
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
