---
tag: PN4DAZ7Z8S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a country there are $n$ major cities, $n \ge 4$, connected by railroads, such that each city is directly connected to each other city. Each railroad company in that country has but only one train, which connects a series of cities, at least two, such that the train doesn't pass through the same city twice in one shift. The companies divided the market such that any two cities are directly$^1$ connected only by one company. Prove that among any $n+1$ companies, there are two which have no common train station or there are two cities that are connected by two trains belonging to two of these $n+1$ companies.

$^1$ directly connected means that they are connected by a railroad, without no other station between them
