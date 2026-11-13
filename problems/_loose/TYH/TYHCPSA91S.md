---
tag: TYHCPSA91S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=1, a_{n}=n^{2}\left(1+\frac{1}{2^{2}}+\frac{1}{3^{2}}+\cdots+\frac{1}{(n-1)^{2}}\right)(n=$ $2,3, \cdots)$. Prove:
(1) $\frac{a_{n}+1}{a_{n+1}}=\frac{n^{2}}{(n+1)^{2}}(n=2,3, \cdots)$;
(2) $\left(1+\frac{1}{a_{1}}\right)\left(1+\frac{1}{a_{2}}\right) \cdots\left(1+\frac{1}{a_{n}}\right)<4(n=1,2, \cdots)$.
