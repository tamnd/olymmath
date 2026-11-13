---
tag: 5DBHBMC8C0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240850
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that if $f: [0,1]\rightarrow [0,1]$ is a continous function and it has topological transitivity then periodic points of $f$ are dense in $[0,1]$.
Topological transitivity means there for every open sets $U$ and $V$ there is $n>0$ such that $f^n(U)\cap V\neq \emptyset$.
