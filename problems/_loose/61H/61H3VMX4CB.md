---
tag: 61H3VMX4CB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h265875
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3306
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205515
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2009
    source: hf-ai-mo-aops
    label: 2009 China Team Selection Test
---
Let $ n,k$ be given positive integers satisfying $ k\le 2n - 1$ . On a table tennis tournament $ 2n$ players take part, they play a total of $ k$ rounds match, each round is divided into $ n$ groups, each group two players match. The two players in different rounds can match on many occasions. Find the greatest positive integer $ m = f(n,k)$ such that no matter how the tournament processes, we always find $ m$ players each of pair of which didn't match each other.
