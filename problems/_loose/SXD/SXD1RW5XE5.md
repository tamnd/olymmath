---
tag: SXD1RW5XE5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2928160
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39277
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236577
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1980
    source: hf-ai-mo-aops
    label: 1980 Bundeswettbewerb Mathematik
---
Consider the sequence $a_1, a_2, a_3, \ldots$ with $$ a_n = \frac{1}{n(n+1)}. $$ In how many ways can the number $\frac{1}{1980}$ be represented as the sum of finitely many consecutive terms of
this sequence?
