---
tag: 53HAT96QAH
kind: problem
type: answer
answer: \binom{n+k}{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210591
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a country, there are some cities and the city named *Ben Song* is capital. Each cities are connected with others by some two-way roads. One day, the King want to choose $n$ cities to add up with *Ben Song* city to establish an *expanded capital* such that the two following condition are satisfied:

(i) With every two cities in *expanded capital*, we can always find a road connecting them and this road just belongs to the cities of *expanded capital*.

(ii) There are exactly $k$ cities which do not belong to *expanded capital* have the direct road to at least one city of *expanded capital*.

Prove that there are at most $\binom{n+k}{k}$ options to expand the capital for the King.
