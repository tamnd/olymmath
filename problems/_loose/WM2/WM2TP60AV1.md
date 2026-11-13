---
tag: WM2TP60AV1
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all prime numbers $p$ for which one can find a positive integer $m$ and nonnegative integers $a_0,a_1,...,a_m$ less than $p$ such that $$\begin{cases} a_0+a_1p+...+a_{m-1}p^{m-1}+a_{m}p^{m} = 2013 \\
a_0+a_1+...+a_{m-1}+a_{m} = 11\end{cases}$$
