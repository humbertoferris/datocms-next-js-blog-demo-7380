// import { Image } from "react-datocms";
import Image from "next/image";

import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, responsiveImage, slug }) {
  console.log("[img]", responsiveImage);
  const image = (
    <Image
      src={responsiveImage.src}
      layout="intrinsic"
      width={responsiveImage.width}
      height={responsiveImage.height}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug
      })}
      placeholder="blur"
      blurDataURL={responsiveImage.base64}
      alt={responsiveImage.alt}
      title={responsiveImage.title}
    />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
