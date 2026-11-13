---
tag: KCN8J42C9F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Peru MO (ONEM)
    url: https://artofproblemsolving.com/community/c6h2748370
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50637
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Peru MO (ONEM)
---
Around a round table sit $2n$ Peruvians, $2n$ Bolivians and $2n$ Ecuadorians. If it is requested that all those who have as neighbors, to their right and to their left, people of the same
nationality. Find as many people as can stand up.
Clarification: For example, for a Peruvian to get up, his neighbors must be of equal nationality, but not necessarily Peruvians.
