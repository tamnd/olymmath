---
tag: F4TCQ16WJ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose given a map of the world with a certain number (well chosen) of cities indicated.

Domitille starts from a city $C_{1}$ and goes to the city $C_{2}$, which is the farthest from city $C_{1}$. From $C_{2}$, she travels to $C_{3}$, which is the farthest from $C_{2}$, and so on. We assume that there is never any ambiguity about the city that is the farthest from a given city. Show that if $C_{1}$ and $C_{3}$ are different, then Domitille will never return to $C_{1}$.
