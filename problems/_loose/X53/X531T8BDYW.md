---
tag: X531T8BDYW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1225748
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13823
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Let $S = \{1,2,3,4,5,6,7\}$ . Compute the number of sets of subsets $T = \{A, B, C\}$ with $A, B, C \in S$ such that $A \cup B \cup C = S$ , $(A \cap C) \cup (B \cap C) = \emptyset$ , and no subset contains two consecutive integers.
