---
tag: F9EAZ3FC8Q
kind: problem
type: answer
answer: (n+1)^{2}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a rectangular sheet of paper, a circle is drawn, inside which Misha mentally selects $n$ points, and Kolya tries to guess them. In one attempt, Kolya indicates one point on the sheet (inside or outside the circle), and Misha tells Kolya the distance from it to the nearest unguessed point. If this distance turns out to be zero, the indicated point is then considered guessed. Kolya can mark points on the sheet, measure distances, and perform constructions with a compass and ruler. Can Kolya definitely guess all the selected points in fewer than $(n+1)^{2}$ attempts?
