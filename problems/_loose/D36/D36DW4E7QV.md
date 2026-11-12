---
tag: D36DW4E7QV
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20684
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The gnomes dug a system of tunnels that formed a rectangular grid 7 by 2. The main entrance is located at the bottom-left vertex $(0,0)$, and the main exit is at the top-right vertex $(7,2)$. The tunnels are numbered as follows: the tunnel connecting vertices $(x, k)$ and $(x+1, k)$ has a number equal to $7 k + x + 1$, and the tunnel connecting vertices $(m, y)$ and $(m, y+1)$ has a number equal to $21 + 8 y + m + 1$. A collapse occurred, as a result of which all tunnels with numbers that are prime numbers became non-functional. In how many ways can one now travel from the main entrance to the main exit, passing through each tunnel no more than once?
