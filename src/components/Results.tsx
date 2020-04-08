import React from 'react';
import Result from './Result';

type Props = {
  results: any;
};

function Results({ results }: Props) {
  return (
    <section className="results">
      {results.map((result: any) => (
        <Result result={result} />
      ))}
    </section>
  );
}

export default Results;
