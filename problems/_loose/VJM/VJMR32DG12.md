---
tag: VJMR32DG12
kind: problem
type: answer
answer: n=4k+1orn=4k+2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ points, $n \geq 5$, in the plane such that no three lie on a line. John and Peter play the following game: On his turn each of them draws a segment between any two points which are not connected. The winner is the one after whose move every point is an end of at least one segment. If John is to begin the game, find the values of $n$ for which he can always win no matter how Peter plays.
