---
tag: V6RBQ2SJDQ
kind: problem
type: answer
answer: "12090"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left(a_{n}\right)_{n \in N^{*}}$ be defined by $a_{1}=\sqrt[4]{2015}, a_{n+1}=\sqrt[4]{2015+\sqrt[n+1]{a_{n}}}$ for any $n \geq 1$. Calculate $\left[a_{1}\right]+\left[a_{2}\right]+\ldots+\left[a_{2015}\right]$, where $[x]$ is the integer part of the real number $x$.
