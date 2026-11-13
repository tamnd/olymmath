---
tag: CFZJWKGG27
kind: problem
type: answer
answer: '|E|\leqslant(1-\frac{1}{p-1})\frac{n^{2}}{2}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99765
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a graph $G$ with $n$ vertices, if it does not contain a complete graph $K_{p}$ of order $p$, then the number of edges in graph $G$
$$
|E| \leqslant\left(1-\frac{1}{p-1}\right) \frac{n^{2}}{2},
$$

where a complete graph $K_{p}$ of order $p$ refers to a graph with $p$ vertices and edges between every pair of these $p$ vertices. ${ }^{[4]}$
