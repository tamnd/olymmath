---
tag: XBBDVEH29V
kind: problem
type: answer
answer: \frac{10!}{2^{45}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a tournament with 10 teams, each of them plays against each other exactly once. Additionally, there are no ties, and each team has a $50 \%$ chance of winning any match. What is the probability that, after tallying the scores from $\frac{10 \cdot 9}{2}=45$ games, no two players have the same number of wins?
