---
tag: N5F8AY8SK8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2012635
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39353
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236653
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1990
    source: hf-ai-mo-aops
    label: 1990 Bundeswettbewerb Mathematik
---
Given any five nonnegative real numbers with the sum $1$ , show that they can be arranged around a circle in such a way that the five products of two consecutive numbers sum up to at most $1/5$ .
