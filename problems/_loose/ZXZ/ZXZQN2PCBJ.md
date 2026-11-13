---
tag: ZXZQN2PCBJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A desert is shaped like a half-plane, which is divided into many small squares of size $1 \times 1$, 15 squares away from the boundary, there is a robot with energy $E=59$. The "energy consumption" of each small square is a natural number no greater than 5, and the "energy consumption" of any $5 \times 5$ square in the desert is 88. The robot can enter any of the four adjacent small squares (squares with a common edge are called adjacent). Each time it enters a square, the robot's energy decreases by the "energy consumption" number of the square it enters. Can the robot get out of the desert?
