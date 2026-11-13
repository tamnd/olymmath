---
tag: X2RX21NBPD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206621
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Tina and Paul are playing a game on a square $S$. First, Tina selects a point $T$ inside $S$. Next, Paul selects a point $P$ inside $S$. Paul then colors blue all the points inside $S$ that are closer to $P$ than $T$ . Tina wins if the blue region thus produced is the interior of a triangle. Assuming that Paul is lazy and simply selects his point at random (and that Tina knows this), find, with proof, a point Tina can select to maximize her probability of winning, and compute this probability.
