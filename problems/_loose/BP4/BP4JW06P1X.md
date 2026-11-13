---
tag: BP4JW06P1X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that you are standing in the middle of a $100$ meter long bridge. You take a random sequence of steps either $1$ meter forward or $1$ meter backwards each iteration. At each step, if you are currently at meter $n$, you have a $\tfrac{n}{100}$ probability of $1$ meter forward, to meter $n+1$, and a $\tfrac{100-n}{100}$ of going $1$ meter backward, to meter $n-1$. What is the expected value of the number of steps it takes for you to step off the bridge (i.e., to get to meter $0$ or $100$)?
