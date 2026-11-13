---
tag: 4YYC34XAMS
kind: problem
type: answer
answer: 0<a_{1}<\frac{3}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143633
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$, where $a_{1}>0$, and $a_{n+1}=\sqrt{\frac{3+a_{n}}{2}}$.
(1) Try to find the range of $a_{1}$ such that $a_{n+1}>a_{n}$ for any positive integer $n$;
(2) If $a_{1}=4$, let $b_{n}=\left|a_{n+1}-a_{n}\right|(n=1,2,3, \cdots)$, and let $S_{n}$ denote the sum of the first $n$ terms of the sequence $\left\{b_{n}\right\}$, prove: $S_{n}<\frac{5}{2}$.
