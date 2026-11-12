---
tag: 539VGY9KCA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(35 points) In a state, there are 11 cities and a capital. There are two-way bus routes between the capital and the other cities, each of which (in both directions) takes 7 hours. Non-capital cities are connected by two-way roads in a cyclic manner: the 1st city with the 2nd, the 2nd with the 3rd, ..., the 10th with the 11th, and the 11th with the 1st. The travel time for a bus on any of these roads is 3 hours. When using a transit route (between cities not directly connected), each transfer requires 2 hours. It is known that the longest travel time is from city A to city B. A passenger chose the optimal (by time) route from A to B, after which the transportation company reduced the transfer time from 2 hours to 1.5 hours. Will the passenger be able to re-plan their route so that it takes less time (than the already chosen one)?
