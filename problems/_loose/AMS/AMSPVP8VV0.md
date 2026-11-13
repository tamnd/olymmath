---
tag: AMSPVP8VV0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115824
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a given positive integer, $r=k+\frac{1}{2}$. Denote $f^{(1)}(r)=f(r)=r\lceil x\rceil, f^{(l)}(r)=f\left(f^{(l-1)}(r)\right)$, $l \geqslant 2$. Prove: There exists a positive integer $m$, such that $f^{(m)}(r)$ is an integer. Here, $\lceil x\rceil$ denotes the smallest integer not less than the real number $x$, for example: $\left\lceil\frac{1}{2}\right\rceil=1,\lceil 1\rceil=1$.
