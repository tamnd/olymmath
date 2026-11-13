---
tag: ZNCSY76TQ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2937793
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39330
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236630
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1987
    source: hf-ai-mo-aops
    label: 1987 Bundeswettbewerb Mathematik
---
Place the integers $1,2 , \ldots, n^{3}$ in the cells of a $n\times n \times n$ cube such that every number appears once. For any possible enumeration, write down the maximal difference between any two adjacent cells (adjacent means having a common vertex). What is the minimal number noted down?
