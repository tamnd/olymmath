---
tag: 2FA7SSMT4V
kind: problem
type: answer
answer: (0, 0, 0), (2, 2, 2), (-2, -2, -2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214650
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all the triplets of real numbers $(x , y , z)$ such that :

$y=\frac{x^3+12x}{3x^2+4}$ , $z=\frac{y^3+12y}{3y^2+4}$ , $x=\frac{z^3+12z}{3z^2+4}$
