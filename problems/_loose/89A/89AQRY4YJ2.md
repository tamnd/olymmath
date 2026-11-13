---
tag: 89AQRY4YJ2
kind: problem
type: answer
answer: u > 0 \text{ and } w \leq 4u
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268750
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all second degree polynomials $P(x)$ such that for all $a \in\mathbb{R} , a \geq 1$, then
$P(a^2+a) \geq a.P(a+1)$
