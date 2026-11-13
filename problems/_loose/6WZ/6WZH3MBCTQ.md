---
tag: 6WZH3MBCTQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212581
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An infinite sequence $(a_0,a_1,a_2,\dots)$ of positive integers is called a $\emph{ribbon}$ if the sum of any eight consecutive terms is at most $16$; that is, for all $i\ge0$,
$$a_i+a_{i+1}+\dots+a_{i+7}\le16.$$A positive integer $m$ is called a $\emph{cut size}$ if every ribbon contains a set of consecutive elements that sum to $m$; that is, given any ribbon $(a_0,a_1,a_2,\dots)$, there exist nonnegative integers $k\le l$ such that
$$a_k+a_{k+1}+\dots+a_l=m.$$Find, with proof, all cut sizes, or prove that none exist.
