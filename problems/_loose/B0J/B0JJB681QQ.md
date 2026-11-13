---
tag: B0JJB681QQ
kind: problem
type: answer
answer: 1-(\frac{1}{2})^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies $a_{n}+S_{n}=n$, the sequence $\left\{b_{n}\right\}$ satisfies $b_{1}=a_{1}$, and $b_{n}=a_{n}-$ $a_{n-1}(n \geqslant 2)$.
(1) Find the general term formula for $\left\{a_{n}\right\}$;
(2) Find the general term formula for $\left\{b_{n}\right\}$;
(3) Find the sum of the first $n$ terms of the sequence $\left\{b_{n}\right\}$, $B_{n}$.
