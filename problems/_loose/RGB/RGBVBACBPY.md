---
tag: RGBVBACBPY
kind: problem
type: answer
answer: \frac{\pi}{2} - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224312
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_n$ be the set of all the sums $ \sum_{k=1}^n \arcsin x_k $, where $n\geq 2$, $x_k \in [0,1]$, and $ \sum^n_{k=1} x_k = 1$.

a) Prove that $A_n$ is an interval.

b) Let $a_n$ be the length of the interval $A_n$. Compute $ \lim_{n\to \infty} a_n$.
