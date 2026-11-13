---
tag: 8Y1KEV0W7W
kind: problem
type: answer
answer: f(n) = 3n^2 - 3n + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246886
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $ f : \mathbb N^\ast \to \mathbb N^\ast$ ($ N^\ast = \{ 1,2,3,\ldots \}$) with the property that, for all $ n \geq 1$, $$ f(1) + f(2) + \ldots + f(n) $$ is a perfect cube $\leq n^3$.

*Dinu Teodorescu*
