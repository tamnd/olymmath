---
tag: 7T3WKFFAYV
kind: problem
type: answer
answer: \frac{y}{x} \in [2, 8)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x,y$ be real numbers with $x \geqslant \sqrt{2021}$ such that
$$ \sqrt[3]{x+\sqrt{2021}}+\sqrt[3]{x-\sqrt{2021}} = \sqrt[3]{y}$$
Determine the set of all possible values of $y/x$.
