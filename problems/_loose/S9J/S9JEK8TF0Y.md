---
tag: S9JEK8TF0Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220458
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are n stations $1,2,...,n$ in a broken road (like in Cars) in that order such that the distance between station $i$ and $i+1$ is one unit. The distance betwen two positions of cars is the minimum units needed to be fixed so that every car can go from its place in the first position to its place in the second (two cars can be in the same station in a position). Prove that for every $\alpha<1$ thre exist $n$ and $100^n$ positions such that the distance of every two position is at least $n\alpha$.
