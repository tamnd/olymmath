---
tag: 9K4B5KSQC9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231726
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a set $S$ of positive real numbers, let $$\Sigma (S) = \Bigg\{ \sum_{x \in A} x : \emptyset \neq A \subset S \Bigg\}.$$
be the set of all the sums of elements of non-empty subsets of $S$. Find the least constant $L> 0$ with the following property: for every integer greater than $1$ and every set $S$ of $n$ positive real numbers, it is possible partition $\Sigma(S)$ into $n$ subsets $\Sigma_1,\ldots, \Sigma_n$ so that the ratio between the largest and smallest element of each $\Sigma_i$ is at most $L$.
