---
tag: CDVCM0PNCN
kind: problem
type: answer
answer: "90"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223980
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of all partitions of $2000$ (in a sum of positive integers). For every such partition $p$, we deﬁne $f (p)$ to be the sum of the number of summands in $p$ and the maximal summand in $p$. Compute the minimum of $f (p)$ when $p \in S .$
