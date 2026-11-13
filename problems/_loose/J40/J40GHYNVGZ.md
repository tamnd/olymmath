---
tag: J40GHYNVGZ
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141761
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies:
$$
\begin{array}{l}
a_{1}=1, a_{2}=2, a_{3}=4, \\
a_{n}=a_{n-1}+a_{n-2}-a_{n-3}+1(n \geqslant 4) .
\end{array}
$$
(1) Find the general term formula for the sequence $\left\{a_{n}\right\}$;
(2) Prove: $\frac{1}{a_{1}}+\frac{1}{a_{2}}+\cdots+\frac{1}{a_{2016}}<3$.
