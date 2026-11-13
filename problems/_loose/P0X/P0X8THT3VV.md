---
tag: P0X8THT3VV
kind: problem
type: answer
answer: (4, 13)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263910
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Homer gives mathematicians Patty and Selma each a different integer, not known to
the other or to you. Homer tells them, within each other's hearing, that the number given to
Patty is the product $ab$ of the positive integers $a$ and $b$, and that the number given to Selma is the sum $a + b$ of the same numbers $a$ and $b$, where $b > a > 1.$ He doesn't, however, tell Patty or Selma the numbers $a$ and $b.$ The following (honest) conversation then takes place:
Patty: "I can't tell what numbers $a$ and $b$ are."
Selma: "I knew before that you couldn't tell."
Patty: "In that case, I now know what $a$ and $b$ are."
Selma: "Now I also know what $a$ and $b$ are."
Supposing that Homer tells you (but neither Patty nor Selma) that neither $a$ nor $b$ is greater than 20, find $a$ and $b$, and prove your answer can result in the conversation above.
