---
tag: 4RRVFBR3WY
kind: problem
type: answer
answer: 1-\frac{1}{2^{n+1}-1}<1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies the conditions: $a_{1}=1, a_{n+1}=2 a_{n}+1, n \in \mathbf{N}_{+}$.
(1) Find the general term formula for the sequence $\left\{a_{n}\right\}$;
(2) Let $c_{n}=\frac{2^{n}}{a_{n} \cdot a_{n+1}}, T_{n}=\sum_{k=1}^{n} c_{k}$, prove: $T_{n}<1$.
