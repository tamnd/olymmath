---
tag: 4BC6DBYW49
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184649
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the multiplication of two natural numbers $a$ and $b$ with $5 \leq a \leq 10$ and $5 \leq b \leq 10$, there is the following "finger rule":

On one hand, stretch out as many fingers as the first number $a$ is greater than 5. Do the same with the other hand for the second number $b$. The total number of stretched fingers is multiplied by 10. The number of non-stretched fingers on one hand is multiplied by the number of non-stretched fingers on the other hand and added to the previous product. The resulting sum is the desired result $a \cdot b$.

Prove that this "finger rule" holds for all the given $a$ and $b$!
