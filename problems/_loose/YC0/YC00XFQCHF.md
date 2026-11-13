---
tag: YC00XFQCHF
kind: problem
type: answer
answer: "14"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147216
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $R, S$ and $T$ are digits and that $N$ is the four-digit positive integer $8 R S T$. That is, $N$ has thousands digit 8 , hundreds digit $R$, tens digits $S$, and ones (units) digit $T$, which means that $N=8000+100 R+10 S+T$. Suppose that the following conditions are all true:

- The two-digit integer $8 R$ is divisible by 3 .
- The three-digit integer $8 R S$ is divisible by 4 .
- The four-digit integer $8 R S T$ is divisible by 5 .
- The digits of $N$ are not necessarily all different.

The number of possible values for the integer $N$ is
(A) 8
(B) 16
(C) 12
(D) 10
(E) 14

Part C: Each correct answer is worth 8.
