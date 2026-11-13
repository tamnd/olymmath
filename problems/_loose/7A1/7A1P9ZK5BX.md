---
tag: 7A1P9ZK5BX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Théo has 101 cards, which he numbered from 1 to 101 with a blue pen. He then places the cards face down in a circle in any order. For each card $C$, he notes $f(C)$ as the number of cards with a blue number less than that of $C$, among the 50 cards following $C$ when moving clockwise around the circle. He then writes the number $f(C)$ in red on the visible side of the card $C$.

Once this is done, Aurélien arrives and sees the visible side of each card. Show that Aurélien can determine the blue numbers from the red numbers written on them.
