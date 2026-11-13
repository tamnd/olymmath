---
tag: CGBPA2961W
kind: problem
type: answer
answer: \frac{(2n-3)\cdot3^{n}+3}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S_{n}$ be the sum of the first $n$ terms of the sequence $\left\{a_{n}\right\}$, and $a_{1}+a_{2}=4, \frac{2 S_{n+1}+1}{2 S_{n}+1}=\frac{a_{2}}{a_{1}}=c\left(c>0, n \in \mathbf{N}^{*}\right)$.
(1) Find the general term formula of the sequence $\left\{a_{n}\right\}$;
(2) Let $b_{n}=a_{n} \log _{3} a_{n}$, find the sum of the first $n$ terms of the sequence $\left\{b_{n}\right\}$, $T_{n}$.
