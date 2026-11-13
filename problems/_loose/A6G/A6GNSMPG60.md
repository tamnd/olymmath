---
tag: A6GNSMPG60
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h1994739
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39416
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236716
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1998
    source: hf-ai-mo-aops
    label: 1998 Bundeswettbewerb Mathematik
---
Prove that there exist $16$ subsets of set $M = \{1,2,...,10000\}$ with the following property:
For every $z \in M$ there are eight of these subsets whose intersection is $\{z\}$ .
