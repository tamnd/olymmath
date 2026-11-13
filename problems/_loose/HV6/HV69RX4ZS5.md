---
tag: HV69RX4ZS5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2590343
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20389
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221906
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Romania Team Selection Test
---
Let $N\geq 4$ be a fixed positive integer. Two players, $A$ and $B$ are forming an ordered set $\{x_1,x_2,...\},$ adding elements alternatively. $A$ chooses $x_1$ to be $1$ or $-1,$ then $B$ chooses $x_2$ to be $2$ or $-2,$ then $A$ chooses $x_3$ to be $3$ or $-3,$ and so on. (at the $k^{th}$ step, the chosen number must always be $k$ or $-k$ )

The winner is the first player to make the sequence sum up to a multiple of $N.$ Depending on $N,$ find out, with proof, which player has a winning strategy.
