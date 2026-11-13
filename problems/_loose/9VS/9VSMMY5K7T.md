---
tag: 9VSMMY5K7T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143547
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, let the set $M=$ $\{0, \pm 1, \pm 2, \cdots, \pm n\}$. A subset $P$ of $M$ is called a "basis subset" if and only if every element in $M$ can be expressed as the sum of some (possibly one) distinct elements from $P$. Determine the smallest positive integer $k$ such that any $k$-element subset of $M$ is a basis subset.
