---
tag: TH8PS52PSF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h404273
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6603
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208726
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2011
    source: hf-ai-mo-aops
    label: 2011 Iran MO (2nd Round)
---
Find all increasing sequences $a_1,a_2,a_3,...$ of natural numbers such that for each $i,j\in \mathbb N$ , number of the divisors of $i+j$ and $a_i+a_j$ is equal. (an increasing sequence is a sequence that if $i\le j$ , then $a_i\le a_j$ .)
