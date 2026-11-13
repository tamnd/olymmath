---
tag: HHSV6787GK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h39585
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32875
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231922
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2005
    source: hf-ai-mo-aops
    label: 2005 Olympic Revenge
---
Let A be a symmetric matrix such that the sum of elements of any row is zero.
Show that all elements in the main diagonal of cofator matrix of A are equal.
