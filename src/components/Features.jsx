import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

function BentoTilt({ children, className = "" }) {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const x = ((clientX - left) / width) * 2 - 1;
    const y = (-(clientY - top) / height) * 2 + 1;
    setTransformStyle(
      `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg)`,
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      className={className}
    >
      {children}
    </div>
  );
}

function BentoCard({ src, title, description }) {
  return (
    <div className="relative size-full">
      <video
        src={src}
        autoPlay
        muted
        loop
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="bg-black pb-32">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Dive into the &apos;Game of Games&apos; Universe
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding ecosystem where a
            vibrant array of products converge into an interconnected universe.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                Radia<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt>

        <div className="grid h-[175vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  Zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  N<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension to the play of social interaction for Web3 communities."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  as<b>u</b>l
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="special-font bento-title max-w-64 text-black">
                M<b>o</b>re Co<b>m</b>ing S<b>o</b>on!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="/videos/feature-5.mp4"
              autoPlay
              muted
              loop
              className="size-full object-cover object-center"
            ></video>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}

export default Features;
