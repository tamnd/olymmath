---
tag: D90AYGBGY3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246927
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,1]\to\mathbb{R}$ be a continuous function and let $\{a_n\}_n$, $\{b_n\}_n$ be sequences of reals such that
$$ \lim_{n\to\infty} \int^1_0 | f(x) - a_nx - b_n | dx = 0 . $$

Prove that:

a) The sequences $\{a_n\}_n$, $\{b_n\}_n$ are convergent;

b) The function $f$ is linear.
