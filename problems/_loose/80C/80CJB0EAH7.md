---
tag: 80CJB0EAH7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h66338
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66445
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199451
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
For how many integers $n$ between 1 and 100 does $x^2+x-n$ factor into the product of two linear factors with integer coefficients?

$\text{(A)} \ 0 \text{(B)} \ 1 \text{(C)} \ 2 \text{(D)} \ 9 \text{(E)} \ 10$
