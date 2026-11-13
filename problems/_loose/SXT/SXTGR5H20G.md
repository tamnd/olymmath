---
tag: SXTGR5H20G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1985 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1903328
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27950
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228299
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1985 Tournament Of Towns
---
The integer part $I (A)$ of a number $A$ is the greatest integer which is not greater than $A$ , while the fractional part $F(A)$ is defined as $A - I(A)$ .
(a) Give an example of a positive number $A$ such that $F(A) + F( 1/A) = 1$ .
(b) Can such an $A$ be a rational number?

(I. Varge, Romania)
