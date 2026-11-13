---
tag: CJQJA3A802
kind: problem
type: answer
answer: \frac{\pi}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(x_i)$ be a decreasing sequence of positive reals, then show that:

(a) for every positive integer $n$ we have $\sqrt{\sum^n_{i=1}{x_i^2}} \leq \sum^n_{i=1}\frac{x_i}{\sqrt{i}}$.

(b) there is a constant C for which we have $\sum^{\infty}_{k=1}\frac{1}{\sqrt{k}}\sqrt{\sum^{\infty}_{i=k}x_i^2} \le C\sum^{\infty}_{i=1}x_i$.
