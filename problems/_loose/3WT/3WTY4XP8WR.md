---
tag: 3WTY4XP8WR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Junior Macedonian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1846520
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29546
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo/2018
    source: hf-ai-mo-aops
    label: 2018 Junior Macedonian Mathematical Olympiad
---
A regular $2018$ -gon is inscribed in a circle. The numbers $1, 2, ..., 2018$ are arranged on the vertices of the $2018$ -gon, with each vertex having one number on it, such that the sum of any $2$ neighboring numbers ( $2$ numbers are neighboring if the vertices they are on lie on a side of the polygon) equals the sum of the $2$ numbers that are on the antipodes of those $2$ vertices (with respect to the given circle). Determine the number of different arrangements of the numbers.
(Two arrangements are identical if you can get from one of them to the other by rotating around the center of the circle).
