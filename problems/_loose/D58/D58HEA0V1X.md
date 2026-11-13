---
tag: D58HEA0V1X
kind: problem
type: answer
answer: "320"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given sets $A$ and $B$ are both sets of positive integers, and $|A|=20,|B|=16$. Set $A$ satisfies the following condition: if $a, b, m, n \in A$, and $a+b=m+n$, then $\{a, b\}=\{m, n\}$. Define
$$
A+B=\{a+b \mid a \in A, b \in B\} .
$$

Determine the minimum value of $|A+B|$.
