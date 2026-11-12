---
tag: QCMAC5QDXY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=18680
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a natural number $n>5$. On a ring-shaped strip of paper, a sequence of zeros and ones is written. For each sequence $w$ of $n$ zeros and ones, the number of ways to cut a fragment from the strip on which $w$ is written was calculated. It turned out that the maximum number $M$ is achieved on the sequence $11 \underbrace{00 \ldots 0}_{n-2}$, and the minimum (possibly zero) - on the sequence $\underbrace{00 \ldots 0}_{n-2} 11$. Prove that there is another sequence of $n$ zeros and ones that occurs exactly $M$ times.

(I. Bogdanov)
