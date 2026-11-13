---
tag: WZ76JTGNB9
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77404
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A grid of dimensions $20 \times 20$ is divided into 400 unit squares of dimensions $1 \times 1$. Clara colors each square either white or black, and then Isabelle cuts the grid into rectangles whose sides lie along the grid lines. Each of these rectangles must contain at most 2 black squares, and she gives Clara a chocolate for each rectangle that contains 0 or 1 black square.

Isabelle chooses her cutting to give the fewest chocolates possible to Clara, and Clara chooses her initial coloring to get the most chocolates possible from Isabelle. How many chocolates will Isabelle give to Clara?
