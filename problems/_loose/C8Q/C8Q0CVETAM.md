---
tag: C8Q0CVETAM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90529
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=318
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a distant planet, there are 2014 cities, some pairs of which are connected by two-way roads. It turns out that the population of each city is the average of the populations of the cities to which it is connected by a single road, and moreover that it is possible to travel from every city to every other city by a sequence of roads.

Prove that all cities have the same population.
