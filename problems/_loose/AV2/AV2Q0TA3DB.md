---
tag: AV2Q0TA3DB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
People play a game, taking turns to perform the following operation: The player connects two vertices with a line segment, one of which cannot be the endpoint of two already connected line segments. Connected line segments can have common points. Such operations continue until the points are used up. After this, if the first player can choose an appropriate direction for all connected line segments, such that the sum of all thus obtained vectors is a zero vector, then he wins; otherwise, the second player wins. Question: Under correct play, who has a sure-win strategy?
