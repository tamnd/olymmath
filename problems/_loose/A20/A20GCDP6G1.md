---
tag: A20GCDP6G1
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133502
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$, the sum of the first $n$ terms $S_{n}$ satisfies $2 S_{n}-n a_{n}=n, n \in \mathbf{N}^{*}$, and $a_{2}=3$.
(1) Find the general term formula of the sequence $\left\{a_{n}\right\}$;
(2) Let $b_{n}=\frac{1}{a_{n} \sqrt{a_{n+1}}+a_{n+1} \sqrt{a_{n}}}, T_{n}$ be the sum of the first $n$ terms of the sequence $\left\{b_{n}\right\}$, find the smallest positive integer $n$ such that $T_{n}>\frac{9}{20}$.
