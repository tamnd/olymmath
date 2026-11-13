---
tag: KNBHA8P9TP
kind: problem
type: answer
answer: "15"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75600
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a certain city, a connected network for spreading rumors has been built (rumors from any male gossiper and any female gossiper can reach all others). In this network, each male gossiper exchanges information with two female gossipers, and each female gossiper exchanges information with three male gossipers. Assume that in the mentioned network, there exists a male and a female such that the network would no longer be connected if either of these two individuals were to die. Find the smallest possible number of members in this network.
