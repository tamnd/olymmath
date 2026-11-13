---
tag: WWQ2ATJYJ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h1994831
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39390
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1995
    source: hf-ai-mo-aops
    label: 1995 Bundeswettbewerb Mathematik
---
Let $S$ be a union of finitely many disjoint subintervals of $[0,1]$ such that no two points in $S$ have distance $1/10$ . Show that the total length of the intervals comprising $S$ is at most $1/2$ .
