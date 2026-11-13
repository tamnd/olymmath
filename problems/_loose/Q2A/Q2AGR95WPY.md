---
tag: Q2AGR95WPY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90697
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n, k, r$ be positive integers. Suppose we have a collection of sets $S_{1}, S_{2}, \ldots, S_{r}$, where each $S_{i}$ is a subset of $\{1,2, \ldots, n\}$ consisting of one or more consecutive integers. We say that such a collection is a $k$-fold perfect cover of $\{1,2, \ldots, n\}$ if each element of $\{1,2, \ldots, n\}$ occurs in exactly $k$ of the sets $S_{i}$. (As an example, $S_{1}=\{1\}, S_{2}=\{1,2,3\}, S_{3}=\{2\}, S_{4}=\{3,4,5\}, S_{5}=\{4,5\}$ is a 2 -fold perfect cover when $n=5$.)

Given a collection of sets which is a $k$-fold perfect cover of $\{1,2, \ldots, n\}$, show that we can partition the collection into $k$ subcollections, each of which is a 1 -fold perfect cover of $\{1,2, \ldots, n\}$.
