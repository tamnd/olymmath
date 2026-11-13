---
tag: GF1RD4MVN9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190931
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob are playing a game where they take turns drawing line segments of length 1 in the Euclidean plane. Alice starts by drawing the first segment, and from then on, each segment must start from the endpoint of the last segment drawn. It is not allowed to draw a segment that is identical to the previous segment. If the new segment shares any point - other than its starting point - with any of the previously drawn segments, the player loses.

a) Show that both Alice and Bob can force the end of the game, regardless of who wins.

b) Does either of them have a winning strategy?
