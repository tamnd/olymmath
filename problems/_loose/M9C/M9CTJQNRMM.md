---
tag: M9CTJQNRMM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h80885
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25253
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226011
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1993
    source: hf-ai-mo-aops
    label: 1993 IMO Shortlist
---
Let $S_n$ be the number of sequences $(a_1, a_2, \ldots, a_n),$ where $a_i \in \{0,1\},$ in which no six consecutive blocks are equal. Prove that $S_n \rightarrow \infty$ when $n \rightarrow \infty.$
