---
tag: QXAV1YEDMK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93673
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an ordered integer pair $(x, y)$, if the greatest common divisor of $x$ and $y$ is 1, then the point corresponding to the pair $(x, y)$ is called a "primitive lattice point". Given a finite set of primitive lattice points $S$. Prove: There exist positive integer $n$ and integers $a_{0}, a_{1}, \cdots, a_{n}$, such that for every $(x, y)$ in the point set $S$,
$$
\sum_{i=0}^{n} a_{i} x^{n-i} y^{i}=1 .
$$
