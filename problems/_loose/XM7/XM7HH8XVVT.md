---
tag: XM7HH8XVVT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1276405
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14087
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215882
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2016
    source: hf-ai-mo-aops
    label: 2016 India IMO Training Camp
---
Let $\mathbb N$ denote the set of all natural numbers. Show that there exists two nonempty subsets $A$ and $B$ of $\mathbb N$ such that

- $A\cap B=\{1\};$
- every number in $\mathbb N$ can be expressed as the product of a number in $A$ and a number in $B$ ;

- each prime number is a divisor of some number in $A$ and also some number in $B$ ;

- one of the sets $A$ and $B$ has the following property: if the numbers in this set are written as $x_1<x_2<x_3<\cdots$ , then for any given positive integer $M$ there exists $k\in \mathbb N$ such that $x_{k+1}-x_k\ge M$ .

- Each set has infinitely many composite numbers.
