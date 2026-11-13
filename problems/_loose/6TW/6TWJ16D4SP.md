---
tag: 6TWJ16D4SP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1976 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2964205
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39248
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236548
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1976
    source: hf-ai-mo-aops
    label: 1976 Bundeswettbewerb Mathematik
---
In a plane are given $n > 2$ distinct points. Some pairs of these points are connected by segments so that no two of the segments intersect. Prove that there are at most $3n-6$ segments.
