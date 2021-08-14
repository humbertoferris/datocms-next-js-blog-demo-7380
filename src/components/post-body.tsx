import { StructuredText } from "react-datocms";

import Image from "next/image";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-blue">
        <StructuredText
          data={content}
          renderBlock={({ record }: any) => {
            if (record.__typename === "ImageBlockRecord") {
              const responsiveImage = record.image?.responsiveImage;
              // return <Image data={record.image.responsiveImage} />;
              return (
                <Image
                  src={responsiveImage?.src}
                  layout="intrinsic"
                  width={responsiveImage?.width}
                  height={responsiveImage?.height}
                  placeholder="blur"
                  blurDataURL={responsiveImage?.base64}
                  alt={responsiveImage?.alt}
                  title={responsiveImage?.title}
                />
              );
            }

            return (
              <>
                <p>{"Don't know how to render a block!"}</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
