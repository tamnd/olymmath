---
tag: PAWAZ6BK4G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Some signal lights are numbered $1,2, \cdots, m(m \geqslant 2)$, distributed at equal distances along a single-track railway. According to safety regulations, when a train is traveling between one signal light and the next, no other trains are allowed to pass through this signal light. However, trains can stop one after another at a signal light (the length of the trains is considered to be 0).

There are $n$ trains that need to travel from signal light 1 to signal light $m, n$ trains have different speeds, but each train always travels at a constant speed. Try to prove that regardless of how the order of train operations is arranged, the shortest time required from the first train leaving signal light 1 to the $k$-th train reaching signal light $m$ is always the same.
