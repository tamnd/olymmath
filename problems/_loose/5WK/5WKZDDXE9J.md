---
tag: 5WKZDDXE9J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Certain cities are connected by roads connecting pairs of them. The roads intersect only at the cities. A subset of the roads is called important if destroying those roads would make it so that there are two cities such that it is impossible to go from the first to the second. A subset $S$ of the roads is called strategic if it is important and no proper subset of $S$ is important. Let $S$ and $T$ be distinct strategic sets of roads. Let $U$ be the set of roads that are either in $S$ or $T$, but not both. Prove that $U$ is important.
