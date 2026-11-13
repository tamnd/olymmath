---
tag: MSFB2QGYC3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h2072174
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32862
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231909
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2003
    source: hf-ai-mo-aops
    label: 2003 Olympic Revenge
---
Let $[n]=\{1,2,...,n\}$ .Let $p$ be any prime number.
Find how many finite non-empty sets $S\in [p] \times [p]$ are such that $$ \large p | \sum_{(x,y) \in S}{x},p | \sum_{(x,y) \in S}{y} $$
