---
tag: G5VPB7PD5C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h286210
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44748
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240986
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1995
    source: hf-ai-mo-aops
    label: 1995 Irish Math Olympiad
---
Consider the following one-person game played on the real line. During the game disks are piled at some of the integer points on the line. To perform a move in the game, the player chooses a point $ j$ at which at least two disks are piled and then takes two disks from the point $ j$ and places one of them at $ j-1$ and one at $ j+1$ . Initially, $ 2n+1$ disks are placed at point $ 0$ . The player proceeds to perform moves as long as possible. Prove that after $ \frac{1}{6} n(n+1)(2n+1)$ moves no further moves will be possible and that at this stage, one disks remains at each of the positions $ -n,-n+1,...,0,...n$ .
