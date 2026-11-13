---
tag: RNTFH9HNGH
kind: problem
type: answer
answer: \frac{p-1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{p}>3$ be a prime number, and the set $M=\{1,2, \ldots, p-1\}$. Denote
$$
T=\left\{\left(n, x_{n}\right): p \mid\left(n x_{n}-1\right) \text {, and } n 、 x_{n} \in M\right\}
$$

Find $\sum_{\left(\mathrm{n}, x_{n}\right) \in \mathrm{T}} \mathrm{n}\left[\frac{\mathrm{nx}}{\mathrm{p}}\right]$ modulo $\mathrm{p}$, the smallest non-negative residue.
