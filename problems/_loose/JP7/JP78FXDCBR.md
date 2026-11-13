---
tag: JP78FXDCBR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185938
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
\section*{Problem 6B - 171236B}

If $z$ is a real number, then $[z]$ denotes the greatest integer less than or equal to $z$. For example, $\left[\frac{7}{2}\right]=3 ;[5]=5 ;[-\pi]=-4$.

Prove:

For every real number $x$ and every positive integer $n$,

$$
[x]+\left[x+\frac{1}{n}\right]+\ldots+\left[x+\frac{n-1}{n}\right]=[n x]
$$
