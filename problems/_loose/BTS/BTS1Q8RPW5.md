---
tag: BTS1Q8RPW5
kind: problem
type: answer
answer: "1008"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154449
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S=\{1,2, \ldots, 2018\}$. For each subset $T$ of $S$, take the product of all elements of $T$, with 1 being the product corresponding to the empty set. The sum of all such resulting products (with repetition) is $N$. Two elements $m$ and $n$ of $S$, with $m<n$, are removed. The sum of all products over all subsets of the resulting set is $\frac{N}{2018}$. What is $n$ ?
