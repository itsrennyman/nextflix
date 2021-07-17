const Container = (props) => {
  return <main className="bg-gray-900">{props.children}</main>;
};

const Hero = (props) => {
  return <div className="h-96">This is the hero image.</div>;
};

const MovieCard = (props) => {
  return <div className="bg-gray-100 h-60 w-40">This is a movie card</div>;
};

const MovieLine = (props) => {
  return (
    <div>
      <h3 className="text-white">{props.title}</h3>
      <div className="flex space-x-5 overflow-x-auto">{props.children}</div>
    </div>
  );
};

export default function Home() {
  return (
    <Container>
      <Hero />
      <div className="text-lg">
        <div className="text-blue-500">HELO</div>
      </div>

      <MovieLine title="My films">
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </MovieLine>
    </Container>
  );
}
