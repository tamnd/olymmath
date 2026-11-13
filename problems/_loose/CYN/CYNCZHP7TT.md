---
tag: CYNCZHP7TT
kind: problem
type: answer
answer: \frac{j-1}{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252880
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are n cards on a table numbered from $1$ to $n$, where $n$ is an even number. Two people take turns taking away the cards. The first player will always take the card with the largest number on it, but the second player will take a random card. Prove: the probability that the first player takes the card with the number $i$ is $ \frac{i-1}{n-1} $
