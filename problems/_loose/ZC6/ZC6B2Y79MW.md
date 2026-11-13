---
tag: ZC6B2Y79MW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80334
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three chips move on a grid and form a triangle $ABC$. Initially, $A$ is at $(0,0)$, $B$ is at $(1,0)$, and $C$ is at $(0,1)$. The chips move successively in space according to the following rule: the chip that moves does so on the line parallel to the side opposite to it, passing through its initial position, and travels the distance it wishes.

The first chip to move is $A$, which travels a certain distance on the line parallel to $(BC)$ and passing through $(0,0)$. $C'$ is then for $B$ to move according to the rule.

Is there a sequence of movements that allows the chips to occupy the positions $(1,0), (-1,0)$, and $(0,1)$?
