---
tag: 4BQAXNX2XC
kind: problem
type: answer
answer: "32"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ and $B$ be two sets of non-negative integers, define $A+B$ as the set of the values obtained when we sum any (one) element of the set $A$ with any (one) element of the set $B$. For instance, if $A=\{2,3\}$ and $B=\{0,1,2,5\}$ so $A+B=\{2,3,4,5,7,8\}$.
Determine the least integer $k$ such that there is a pair of sets $A$ and $B$ of non-negative integers with $k$ and $2k$ elements, respectively, and
$A+B=\{0,1,2,\dots, 2019,2020\}$
