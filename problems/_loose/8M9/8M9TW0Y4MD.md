---
tag: 8M9TW0Y4MD
kind: problem
type: answer
answer: f(x) = k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220065
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all twice differentiable functions $f : \mathbb{R} \to \mathbb{R}$ such that $$f''(x) \cos(f(x))\geq(f'(x))^2 \sin(f(x)) $$ for every $x\in \mathbb{R}$.

*Proposed by Orif Ibrogimov (Czech Technical University of Prague), Karim Rakhimov (University of Pisa)*
