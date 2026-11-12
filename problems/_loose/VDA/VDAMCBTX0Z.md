---
tag: VDAMCBTX0Z
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6689
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Viewers rate a movie with an integer number of points from 0 to 10. At any given time, the movie's rating is calculated as the sum of all the given ratings divided by their number. At some point in time $T$, the rating was an integer, and then with each new voting viewer, it decreased by one. What is the maximum number of viewers who could have voted after moment $T$? (O. Dmitriev, R. Zhenodarov)
