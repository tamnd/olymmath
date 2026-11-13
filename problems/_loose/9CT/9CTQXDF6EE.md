---
tag: 9CTQXDF6EE
kind: problem
type: answer
answer: 1011or2019
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93551
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence of positive integers $\left\{a_{n}\right\}$ satisfies:
$$
\begin{array}{l}
a_{1}=a, a_{2}=b, \\
a_{n+2}=\frac{a_{n}+2018}{a_{n+1}+1}(n \geqslant 1) .
\end{array}
$$

Find all possible values of $a+b$.
