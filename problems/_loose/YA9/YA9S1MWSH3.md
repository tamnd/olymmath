---
tag: YA9S1MWSH3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any real-coefficient polynomial $f(x)$ of degree not less than 2, define $f^{(1)}(x)=f(x), f^{(k)}(x)=f\left(f^{(k-1)}(x)\right)(k \geqslant$ 2 as a positive integer). Given positive integers $u, v$, where $u<v$. Prove: The number of ordered integer pairs $(i, j)$ satisfying $1 \leqslant i<j \leqslant v, f^{(j)}(x)-f^{(i)}(x) \mid f^{(v)}(x)-$ $f^{(u)}(x)$ is independent of the choice of $f$, and find this constant value.
