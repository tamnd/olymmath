---
tag: NXJS988D6Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a math competition, some participants are friends (friendship is mutual, meaning if participant $A$ is a friend of $B$, then $B$ is also a friend of $A$). If $n(n \geq 3)$ different participants $A_{1}, A_{2}, \ldots, A_{n}$ satisfy: for all $1 \leq i \leq n, A_{i}$ is not a friend of $A_{i+1} \left(A_{n+1}=A_{1}\right)$, and any other pair of participants are friends, then $A_{1}, A_{2}, \ldots, A_{n}$ form a "weak friend circle".
