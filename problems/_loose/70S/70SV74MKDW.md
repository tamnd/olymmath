---
tag: 70SV74MKDW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be a positive integer. It is given set of weights which satisfies following conditions:
$i)$ Every weight from set has some weight from $1,2,...,N$;
$ii)$ For every $i\in {1,2,...,N}$ in given set there exists weight $i$;
$iii)$ Sum of all weights from given set is even positive integer.
Prove that set can be partitioned into two disjoint sets which have equal weight
