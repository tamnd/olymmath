---
tag: YDZ25H1TRD
kind: problem
type: answer
answer: T = 2017
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215714
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $a_1, a_2, \ldots $ consisting of $1$'s and $0$'s satisfies for all $k>2016$ that
$$ a_k=0 \Longleftrightarrow a_{k-1}+a_{k-2}+\cdots+a_{k-2016}>23. $$
Prove that there exist positive integers $N$ and $T$ such that $a_k=a_{k+T}$ for all $k>N$.
