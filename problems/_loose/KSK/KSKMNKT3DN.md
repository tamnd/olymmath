---
tag: KSKMNKT3DN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022-23 IOQM India
    url: https://artofproblemsolving.com/community/c6h2950810
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42348
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238928
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2022
    source: hf-ai-mo-aops
    label: 2022-23 IOQM India
---
A binary sequence is a sequence in which each term is equal to $0$ or $1$ . A binary sequence is called $\text{friendly}$ if each term is adjacent to at least on term that is equal to $1$ . For example , the sequence $0,1,1,0,0,1,1,1$ is $\text{friendly}$ . Let $F_{n}$ denote the number of $\text{friendly}$ binary sequences with $n$ terms. Find the smallest positive integer $n\ge 2$ such that $F_{n}>100$
