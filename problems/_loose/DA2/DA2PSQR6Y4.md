---
tag: DA2PSQR6Y4
kind: problem
type: answer
answer: T_{n}<\frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given in the sequence $\left\{a_{n}\right\}$, $a_{1}=1$, when $n \geqslant 2$, the sum of the first $n$ terms $S_{n}$ satisfies $S_{n}^{2}=a_{n} \cdot\left(S_{n}-\frac{1}{2}\right)$.
(1) Find the expression for $S_{n}$;
(2) Let $b_{n}=\frac{S_{n}}{2 n+1}$, the sum of the first $n$ terms of the sequence $\left\{b_{n}\right\}$ is $T_{n}$, prove: $T_{n}<\frac{1}{2}$.
