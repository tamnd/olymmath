---
tag: SAP7TJA6EJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2097785
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28446
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1998 Tournament Of Towns
---
A square of side $1$ is divided into rectangles . We choose one of the two smaller sides of each rectangle (if the rectangle is a square, then we choose any of the four sides) . Prove that the sum of the lengths of all the chosen sides is at least $1$ .

(Folklore)
