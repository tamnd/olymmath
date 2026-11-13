---
tag: DB2ZTWD061
kind: problem
type: answer
answer: \text{There is no ghost which is not a multiple of } p
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243625
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an odd prime number. Let $S=a_1,a_2,\dots$ be the sequence defined as follows: $a_1=1,a_2=2,\dots,a_{p-1}=p-1$, and for $n\ge p$, $a_n$ is the smallest integer greater than $a_{n-1}$ such that in $a_1,a_2,\dots,a_n$ there are no arithmetic progressions of length $p$. We say that a positive integer is a *ghost* if it doesn't appear in $S$.
What is the smallest ghost that is not a multiple of $p$?

*Proposed by Guerrero*
