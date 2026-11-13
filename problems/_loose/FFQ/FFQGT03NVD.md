---
tag: FFQGT03NVD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a certain game, the set $\{1, 2, \dots, 10\}$ is partitioned into equally-sized sets $A$ and $B$. In each of five consecutive rounds, Alice and Bob simultaneously choose an element from $A$ or $B$, respectively, that they have not yet chosen; whoever chooses the larger number receives a point, and whoever obtains three points wins the game. Determine the probability that Alice is guaranteed to win immediately after the set is initially partitioned.
