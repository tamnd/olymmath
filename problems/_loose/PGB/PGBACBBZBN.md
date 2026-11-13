---
tag: PGBACBBZBN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206824
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $a_1, a_2, ..., a_r$ are integers with $a_i \geq 2$ for all $i$ such that $a_1 + a_2 + ... + a_r = 2010$.
Prove that the set $\{1,2,3,...,2010\}$ can be partitioned in $r$ subsets $A_1, A_2, ..., A_r$ each with $a_1, a_2, ..., a_r$ elements respectively, such that the sum of the numbers on each subset is divisible by $2011$.
Decide whether this property still holds if we replace $2010$ by $2011$ and $2011$ by $2012$ (that is, if the set to be partitioned is $\{1,2,3,...,2011\}$).
