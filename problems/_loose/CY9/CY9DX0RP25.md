---
tag: CY9DX0RP25
kind: problem
type: answer
answer: 3n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies
$$
a_{1}=1, a_{n+1}=a_{n}+\frac{1}{a_{n}^{2}}(n \geqslant 2) \text {. }
$$
(1) Prove: When $n \geqslant 2$, $a_{n}^{3}>3 n$;
(2) When $n \geqslant 4$, find $\left[a_{9 n^{3}}\right]$ ([ $\left.x\right]$ denotes the greatest integer not exceeding the real number $x$).
