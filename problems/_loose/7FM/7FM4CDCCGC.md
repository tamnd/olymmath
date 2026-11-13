---
tag: 7FM4CDCCGC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471752
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70614
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261901
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2021
    source: hf-ai-mo-aops
    label: 2021 CMIMC
---
How many functions $f:\{1,2,3, \ldots, 7\} \rightarrow \{1,2,3, \ldots, 7\}$ are there such that the set $\mathcal{F} = \{f(i) : i\in\{1,\ldots, 7\}\}$ has cardinality four, while the set $\mathcal{G} = \{f(f(f(i))) : i\in\{1,\ldots, 7\}\}$ consists of a single element?

*Proposed by Sam Delatore*
