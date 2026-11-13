---
tag: VBYNBCH1SK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111099
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x]$ denote the greatest integer not exceeding the real number $x$. Given that $p$ and $q$ are coprime positive integers, prove:
$$
\sum_{k=0}^{p q-1}(-1)^{\left[\frac{k}{p}\right]+\left[\frac{k}{q}\right]}=\left\{\begin{array}{ll}
0, & pq \text { is even; } \\
1, & pq \text { is odd. }
\end{array}\right.
$$
