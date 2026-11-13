---
tag: Z3E0SRKYCT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 CIIM
    url: https://artofproblemsolving.com/community/c6h3159260
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=80033
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268928
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ciim/2023
    source: hf-ai-mo-aops
    label: 2023 CIIM
---
Given a positive integer $k > 1$ , find all positive integers $n$ such that the polynomial $$ P(z) = z^n + \sum_{j=0}^{2^k-2} z^j = 1 +z +z^2 + \cdots +z^{2^k-2} + z^n $$ has a complex root $w$ such that $|w| = 1$ .
