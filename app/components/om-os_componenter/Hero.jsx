export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden -mt-40" style={{ minHeight: "600px", backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/assets/om-os-bg.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 z-10">
        <h1 className="text-4xl font-bold tracking-tight mt-30 text-white sm:text-6xl"> Vi skaber vækst gennem web, marketing og performance</h1>
        <p className="mt-6 text-lg leading-8 text-white">
          {" "}
          Vi er et digital team med baggrund fra DTU, CBS og ITU. Vi kombinerer strategi, <br></br>teknologi og kreativitet for at skabe målbare resultater for vores kunder.{" "}
        </p>
      </div>
    </section>
  );
}
