---
tag: TXFTKE6HCC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77533
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number. We say that a finite set of integers is $n$-balanced if there are exactly $n$ ways to partition it into two subsets with the same sum. For example, the set $\{1,3,4,5,6,7\}$ is 2-balanced, because the only ways to partition it into two subsets with the same sum are to partition it into $\{1,3,4,5\}$ and $\{6,7\}$, or into $\{1,5,7\}$ and $\{3,4,6\}$.

Find all integers $n \geqslant 0$ for which there exists an $n$-balanced set.
