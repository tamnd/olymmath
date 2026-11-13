---
tag: QRH4FTC88A
kind: problem
type: answer
answer: \frac{2}{3}\cdot4^{n+1}+4n-\frac{8}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138775
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=4, a_{n+1} a_{n}+6 a_{n+1}-4 a_{n}-8=0$, and let $b_{n}=\frac{6}{a_{n}-2}, n \in \mathbf{N}^{*}$.
(1) Find the general term formula for the sequence $\left\{b_{n}\right\}$;
(2) Find the sum of the first $n$ terms $S_{n}$ of the sequence $\left\{a_{n} \cdot b_{n}\right\}$.
