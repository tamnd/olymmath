---
tag: 16SMZXEEN0
kind: problem
type: answer
answer: 2^1011
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Integers from $1$ to $2022$ are written on the cards and placed in a row on the table. Each number is used once and there is exactly one number on each card. Mary plays the following game: on each move she takes any card from the table and puts it into her right pocket, then she takes the leftmost card and puts it into her left pocket. After $1011$ moves the table is empty, the game stops and Mary calculates the sum of the numbers written on the cards in her left pocket. For each initial position $\mathcal{P}$ of the cards denote by $S(\mathcal{P})$ the maximal possible sum that Mary can reach.
Find the number of initial positions $\mathcal{P}$, for which the sum $S(\mathcal{P})$ is minimal possible.
