---
tag: 59TGME8XG3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2761919
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69908
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2015
    source: hf-ai-mo-aops
    label: 2015 BMT Spring
---
A partition of a positive integer $n$ is a summing $n_1+\ldots+n_k=n$ , where $n_1\ge n_2\ge\ldots\ge n_k$ . Call a partition *perfect* if every $m\le n$ can be represented uniquely as a sum of some subset of the $n_i$ 's. How many perfect partitions are there of $n=307$ ?
