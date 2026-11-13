---
tag: 23MF5W3XFT
kind: problem
type: answer
answer: \frac{n^{2}+n}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94801
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the plane, there are $n(n \geqslant 2)$ lines, dividing the plane into several regions, some of which are colored, and no two colored regions have adjacent boundaries (two regions with only one common point are not considered to have adjacent boundaries). Prove: The number of colored regions does not exceed $\frac{n^{2}+n}{3}$.
