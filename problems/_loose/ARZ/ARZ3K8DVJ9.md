---
tag: ARZ3K8DVJ9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h80382
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65708
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
The number of real values of $x$ that satisfy the equation$$ (2^{6x+3})(4^{3x+6})=8^{4x+5} $$is:

$\text{(A)} \ 0 \text{(B)} \ 1 \text{(C)} \ 2 \text{(D)} \ 3 \text{(E)} \ \text{greater than 3}$
