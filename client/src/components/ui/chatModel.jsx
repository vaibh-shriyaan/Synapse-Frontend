import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <div className="h-[600px] w-[800px]">
      <Spline
        scene="https://prod.spline.design/fkISp-4qsONhqwgz/scene.splinecode"
        className="pointer-events-none"
      />
    </div>
  );
}
