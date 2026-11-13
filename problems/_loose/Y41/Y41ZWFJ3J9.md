---
tag: Y41ZWFJ3J9
kind: problem
type: answer
answer: S_{n}=6-\frac{n^{2}+4n+6}{2^{n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ where $a_{1}=\frac{1}{2}, a_{n+1}=\frac{1}{2} a_{n}+\frac{2 n+1}{2^{n+1}}\left(n \in \mathbf{N}^{*}\right)$.
(1) Find the general term formula of the sequence $\left\{a_{n}\right\}$;
(2) Find the sum of the first $n$ terms $S_{n}$ of the sequence $\left\{a_{n}\right\}$.
