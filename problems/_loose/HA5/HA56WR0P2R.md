---
tag: HA56WR0P2R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function
$$
\begin{array}{l}
f_{1}(x)=f(x)=x(x-1), \\
f_{n}(x)=f\left(f_{n-1}(x)\right)(n \geqslant 2) .
\end{array}
$$

Prove: (1) When $x>2$, $f_{n}(x)$ has no zeros;
(2) When $1 \leqslant x \leqslant 2$, $f_{n}(x)$ has at least $n$ zeros.
