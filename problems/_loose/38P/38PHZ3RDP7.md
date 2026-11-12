---
tag: 38PHZ3RDP7
kind: problem
type: answer
answer: "153"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the computer center, there are 200 computers, some of which (in pairs) are connected by cables, a total of 345 cables are used. We will call a "cluster" a set of computers such that a signal from any computer in this set can reach all other computers via cables (possibly through intermediate computers). Initially, all computers formed one cluster. But one night, a malicious hacker cut several cables, resulting in 8 clusters. Find the maximum possible number of cables that were cut.
