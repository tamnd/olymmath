---
tag: 6RDCXM8PY4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer and $S_{n}=\{1,2, \ldots, 2 n-1,2 n\}$. A perfect pairing of $S_{n}$ is defined to be a partitioning of the $2 n$ numbers into $n$ pairs, such that the sum of the two numbers in each pair is a perfect square. For example, if $n=4$, then a perfect pairing of $S_{4}$ is $(1,8),(2,7),(3,6),(4,5)$. It is not necessary for each pair to sum to the same perfect square.
(a) Show that $S_{8}$ has at least one perfect pairing.
(b) Show that $S_{5}$ does not have any perfect pairings.
(c) Prove or disprove: there exists a positive integer $n$ for which $S_{n}$ has at least 2017 different perfect pairings. (Two pairings that are comprised of the same pairs written in a different order are considered the same pairing.)
