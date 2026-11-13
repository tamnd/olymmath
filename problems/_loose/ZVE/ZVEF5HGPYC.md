---
tag: ZVEF5HGPYC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h455746
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55792
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2002
    source: hf-ai-mo-aops
    label: 2002 All-Russian Olympiad
---
A hydra consists of several heads and several necks, where each neck joins two heads. When a hydra's head $A$ is hit by a sword, all the necks from head $A$ disappear, but new necks grow up to connect head $A$ to all the heads which weren't connected to $A$ . Heracle defeats a hydra by cutting it into two parts which are no joined. Find the minimum $N$ for which Heracle can defeat any hydra with $100$ necks by no more than $N$ hits.
