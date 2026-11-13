---
tag: X2QEW8ZM4A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=153964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there is an infinite sequence of lights numbered $1,2,3, \ldots$, and you know the following two rules about how the lights work:
- If the light numbered $k$ is on, the lights numbered $2 k$ and $2 k+1$ are also guaranteed to be on.
- If the light numbered $k$ is off, then the lights numbered $4 k+1$ and $4 k+3$ are also guaranteed to be off.
Suppose you notice that light number 2023 is on. Identify all the lights that are guaranteed to be on?
