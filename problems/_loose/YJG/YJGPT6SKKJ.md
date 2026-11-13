---
tag: YJGPT6SKKJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90596
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A permutation of the numbers $1,2, \ldots, n$ is called "bad" if it contains a subsequence of 10 numbers in decreasing order, and "good" otherwise. For example, for $n=15$,

$$
15,13,1,12,7,11,9,8,10,6,5,4,3,2,14
$$

is a bad permutation, because it contains the subsequence

$$
15,13,12,11,10,6,5,4,3,2
$$

Prove that, for each $n$, the number of good permutations is at most $81^{n}$.
