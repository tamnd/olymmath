---
tag: CK1GG64RV5
kind: problem
type: answer
answer: 2^{1003} - 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $K$, define a sequence, $\{a_n\}$, as following: $a_1 = K$ and
$a_{n+1} =a_n -1$ if $a_n$ is even
$a_{n+1} =\frac{a_n - 1}{2}$ if $a_n$ is odd , for all $n \ge 1$.
Find the smallest value of $K$, which makes $a_{2005}$ the first term equal to $0$.
