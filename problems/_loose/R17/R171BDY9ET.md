---
tag: R171BDY9ET
kind: problem
type: answer
answer: 1+2^{100}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179859
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ana has 200 coins, with values $1, 2, 2^{2}, \ldots, 2^{199}$. She divides them into 100 groups of two coins each, calculates the sums $s_{1}, s_{2}, \ldots, s_{100}$ of the values of the coins in each group, and finds the greatest common divisor $D$ of the numbers $s_{1}, s_{2}, \ldots, s_{100}$.

a) Show that $D$ is odd.

b) Determine the maximum value of $D$ that Ana can obtain.
