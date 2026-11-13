---
tag: DW6EQ4QRYS
kind: problem
type: answer
answer: '[x]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the following infinite sum:

$$
\left[\frac{x+1}{2}\right]+\left[\frac{x+2}{4}\right]+\left[\frac{x+4}{8}\right]+\left[\frac{x+8}{16}\right]+\ldots
$$

Intermediate question: show that $[2 x]=[x]+[x+1 / 2]$.
