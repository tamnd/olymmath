---
tag: 9TCGA0AVM0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3344246
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69355
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2024
    source: hf-ai-mo-aops
    label: 2024 ELMO Shortlist
---
Let $\mathcal{S}$ be a set of $10$ points in a plane that lie within a disk of radius $1$ billion. Define a $move$ as picking a point $P \in \mathcal{S}$ and reflecting it across $\mathcal{S}$ 's centroid. Does there always exist a sequence of at most $1500$ moves after which all points of $\mathcal{S}$ are contained in a disk of radius $10$ ?

*Advaith Avadhanam*
