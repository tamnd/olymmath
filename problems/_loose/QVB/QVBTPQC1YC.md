---
tag: QVBTPQC1YC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a kingdom of $N$ cities, some pairs of which are connected by non-intersecting two-way roads (cities from such a pair are called neighboring). It is known that from any city, one can travel to any other city, but it is impossible to leave a city and return to the starting city by traveling along different roads.

One day, the King carried out a reform: each of the $N$ mayors of the cities became the mayor of one of the $N$ cities again, but possibly not the same city they worked in before the reform. It turned out that every two mayors who worked in neighboring cities before the reform ended up in neighboring cities after the reform as well. Prove that either there is a city where the mayor did not change after the reform, or there is a pair of neighboring cities that exchanged mayors.
