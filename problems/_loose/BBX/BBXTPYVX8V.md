---
tag: BBXTPYVX8V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 CentroAmerican
    url: https://artofproblemsolving.com/community/c6h381869
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22020
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223279
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: centro/2004
    source: hf-ai-mo-aops
    label: 2004 CentroAmerican
---
On a whiteboard, the numbers $1$ to $9$ are written. Players $A$ and $B$ take turns, and $A$ is first. Each player in turn chooses one of the numbers on the whiteboard and removes it, along with all multiples (if any). The player who removes the last number loses.
Determine whether any of the players has a winning strategy, and explain why.
