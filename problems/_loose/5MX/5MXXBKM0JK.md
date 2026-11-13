---
tag: 5MXXBKM0JK
kind: problem
type: answer
answer: "1536"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Wu starts out with exactly one coin. Wu flips every coin he has *at once* after each year. For each heads he flips, Wu receives a coin, and for every tails he flips, Wu loses a coin. He will keep repeating this process each year until he has $0$ coins, at which point he will stop. The probability that Wu will stop after exactly five years can be expressed as $\frac{a}{2^b}$, where $a, b$ are positive integers such that $a$ is odd. Find $a+b$.

*Proposed by Bradley Guo*
