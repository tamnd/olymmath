---
tag: Y5HW7WVT9J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(This sub-question is worth 20 points)

Given the sequence $\left\{a_{n}\right\}$ satisfies: when $n=2 k-1\left(k \in \mathbf{N}^{-}\right)$, $a_{n}=n$; when $n=2 k\left(k \in \mathbf{N}^{*}\right)$, $a_{n}=a_{k}$. Let $T_{n}=a_{1}+a_{2}+a_{3}+\cdots+a_{2 n-1}+a_{2 n}$, prove: for any $n \in \mathbf{N}^{*}$,
(1) $T_{n+1}=4^{n}+T_{n}$;
(2) $\frac{1}{T_{1}}+\frac{1}{T_{2}}+\cdots+\frac{1}{T_{n}}<1$.
