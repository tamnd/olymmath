---
tag: 4QH5ZZZA3C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the board, there are $n$ natural numbers. In one operation, instead of two numbers that do not divide each other, you can write their greatest common divisor and their least common multiple.

a) Prove that only a finite number of operations can be performed.

b) The final result will be the same regardless of the order of actions. For example:

$$
\begin{aligned}
& (4,6,9) \rightarrow(2,12,9) \rightarrow(2,3,36) \rightarrow(1,6,36) \\
& (4,6,9) \rightarrow(4,3,18) \rightarrow(1,12,18) \rightarrow(1,6,36)
\end{aligned}
$$
