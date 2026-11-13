---
tag: 6TXRRGJFN7
kind: problem
type: answer
answer: "-1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119070
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$, and $a_{1}=\sqrt{2}+1, \frac{a_{n}-\sqrt{n}}{a_{n-1}-\sqrt{n-1}}=\sqrt{1+\frac{1}{n}}(n=2,3, \cdots)$, let $b_{n}=\frac{1}{a_{n}}$, and denote the sum of the first $n$ terms of the sequence $\left\{b_{n}\right\}$ as $S_{n}$.
(1) Find the general term formula for the sequence $\left\{a_{n}\right\}$;
(2) If for any $n \in \mathbf{N}^{*}, \sqrt{n+2} \leq \lambda\left(S_{n}+1\right) \leq n+101$ always holds, find the range of the real number $\lambda$.
