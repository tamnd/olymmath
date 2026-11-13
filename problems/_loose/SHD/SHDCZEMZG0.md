---
tag: SHDCZEMZG0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221447
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
George plays the following game: At every step he can replace a triple of integers $(x,y,z)$ which is written on the blackboard, with any of the following triples:

(i) $(x,z,y)$
(ii) $(-x,y,z)$
(iii) $(x+y,y,2x+y+z)$
(iv) $(x-y,y,y+z-2x)$

Initially, the triple $(1,1,1)$ is written on the blackboard. Determine whether George can, with a sequence of allowed steps, end up at the triple $(2021,2019,2023)$, fully justifying your answer.
