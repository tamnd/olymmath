---
tag: 4NV2HKMWRY
kind: problem
type: answer
answer: \frac{5}{6}\leqslantT_{n}<1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128484
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence $\left\{a_{n}\right\}$ with all terms being positive, the sum of the first $n$ terms is $S_{n}$, and $a_{n}+1=2 \sqrt{S_{n}}\left(n \in \mathbf{Z}_{+}\right)$.
(1) Find the general term formula for the sequence $\left\{a_{n}\right\}$;
(2) Let $b_{n}=\frac{a_{n+2}}{a_{n} a_{n+1} 2^{n}}$, the sum of the first $n$ terms of the sequence $b_{n}$ is $T_{n}$, prove: $\frac{5}{6} \leqslant T_{n}<1$.
