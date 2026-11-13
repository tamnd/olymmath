---
tag: KF0367NHDY
kind: problem
type: answer
answer: \frac{28}{9}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154667
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, let $\varphi(n)$ be the number of positive integers from 1 to $n$ that are relatively prime to $n$. Evaluate
$$
\sum_{n=1}^{\infty} \frac{\varphi(n) 4^{n}}{7^{n}-4^{n}}
$$
