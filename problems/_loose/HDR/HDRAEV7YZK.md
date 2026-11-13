---
tag: HDRAEV7YZK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1956 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1899547
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56818
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249715
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1956
    source: hf-ai-mo-aops
    label: 1956 Moscow Mathematical Olympiad
---
A square of side $a$ is inscribed in a triangle so that two of the square's vertices lie on the base, and the other two lie on the sides of the triangle. Prove that if $r$ is the radius of the circle inscribed in the triangle, then $r\sqrt2 < a < 2r$ .
