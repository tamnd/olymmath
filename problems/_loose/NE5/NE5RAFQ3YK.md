---
tag: NE5RAFQ3YK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144776
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a round-robin tournament with $n$ players, each pair of players competes in one match (with no ties). Prove that exactly one of the following two scenarios occurs:
(1) All players can be divided into two non-empty sets such that any player in one set defeats all players in the other set;
(2) The $n$ players can be numbered from 1 to $n$ such that the $i$-th player defeats the $(i+1)$-th player, for $i=1,2, \cdots, n$, where $n+1$ is interpreted as 1.
