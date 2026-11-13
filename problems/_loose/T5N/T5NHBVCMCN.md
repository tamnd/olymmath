---
tag: T5NHBVCMCN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob play a game on a sphere which is initially marked with a finite number of points. Alice and Bob then take turns making moves, with Alice going first:

- On Alice's move, she counts the number of marked points on the sphere, $n$. She then marks another $n + 1$ points on the sphere.

- On Bob's move, he chooses one hemisphere and removes all marked points on that hemisphere, including any marked points on the boundary of the hemisphere.

Can Bob always guarantee that after a finite number of moves, the sphere contains no marked points?

(A *hemisphere* is the region on a sphere that lies completely on one side of any plane passing through the centre of the sphere.)

*proposed by the ICMC Problem Committee*
