---
tag: RJ7RAW4TXA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142754
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A country has several cities, each with a number. In the country's flight guide, there is an indicator between the numbers of each pair of cities indicating whether there is a direct flight between these two cities. For any two cities, given the numbers $M$ and $N$, if the city numbered $M$ is changed to $N$, and the numbers of the other cities are appropriately changed, the direct flight relationships between the city numbers in the original flight guide still hold (i.e., they also hold for the new city numbers).

Ask: For any two cities, if the numbers of the cities numbered $M$ and $N$ are swapped, and the numbers of the other cities are appropriately rearranged, will the original direct flight relationships in the flight guide still hold for the current city numbers?
