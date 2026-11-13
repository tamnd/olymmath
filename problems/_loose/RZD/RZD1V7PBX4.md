---
tag: RZD1V7PBX4
kind: problem
type: answer
answer: \frac{1}{a_{4}}+\frac{1}{a_{5}}+\cdots+\frac{1}{a_{}}<\frac{7}{8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108581
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$, the sum of the first $n$ terms $S_{n}$ satisfies $S_{n}=2 a_{n}+(-1)^{n}, n \geqslant 1$.
(1) Write down the first 3 terms of the sequence $\left\{a_{n}\right\}$, $a_{1}, a_{2}, a_{3}$;
(2) Find the general term formula of the sequence $\left\{a_{n}\right\}$;
(3) Prove: For any integer $m>4$, $\frac{1}{a_{4}}+\frac{1}{a_{5}}+\cdots+\frac{1}{a_{m}}<\frac{7}{8}$.
