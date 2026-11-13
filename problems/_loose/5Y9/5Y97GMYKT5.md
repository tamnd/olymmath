---
tag: 5Y97GMYKT5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167563
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Is there a function $f: \mathbf{R} \rightarrow \mathbf{R}$ such that $\lim _{x \rightarrow \infty} f(x)=+\infty$ and for every $n$,

$$
\lim _{x \rightarrow \infty} \frac{f(x)}{\lg (\lg \ldots(\lg x) \ldots)}=0
$$

(the denominator contains $n$ logarithm symbols).
