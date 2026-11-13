---
tag: NWCSA21KNJ
kind: problem
type: answer
answer: \frac{7}{10}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265898
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Liam writes the number $0$ on a board, then performs a series of turns. Each turn, he chooses a nonzero integer so that for every nonzero integer $N,$ he chooses $N$ with $3^{- |N|}$ probability. He adds his chosen integer $N$ to the last number written on the board, yielding a new number. He writes the new number on the board and uses it for the next turn. Liam repeats the process until either $8$ or $9$ is written on the board, at which point he stops. Given that Liam eventually stopped, find the probability the last number he wrote on the board was $9.$
