---
tag: FHSYV3J6PE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226502
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a connected graph $G$, one may perform the following operations:

- choose a vertice $v$, and add a vertice $v'$ such that $v'$ is connected to $v$ and all of its neighbours

- choose a vertice $v$ with odd degree and delete it

Show that for any connected graph $G$, we may perform a finite number of operations such that the resulting graph is a clique.

Proposed by *idonthaveanaopsaccount*
