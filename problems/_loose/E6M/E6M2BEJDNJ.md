---
tag: E6M2BEJDNJ
kind: problem
type: answer
answer: 2^{q}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145866
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each $n \in \mathbf{N}^{*}$, prove: there exists $k \in \mathbf{N}^{*}$, such that
$$
k=f(x)(x+1)^{2 n}+g(x)\left(x^{2 n}+1\right),
$$

for some integer-coefficient polynomials $f(x), g(x)$. And find the smallest $k$ (here $n$ is considered a constant).
