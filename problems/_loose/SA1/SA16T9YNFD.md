---
tag: SA16T9YNFD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A chocolate bar is a rectangle of $m \times n$ unit squares. Only the square at the bottom left is poisoned. In turn, starting with Achille, and then Béatrice, they cut the bar according to the following rule: one chooses a square $c$ and takes the entire rectangle of which $c$ is the lower left corner (it may be that some of the squares of this rectangle have already been taken). Obviously, the one who takes the poisoned square loses.

Who has a winning strategy?
