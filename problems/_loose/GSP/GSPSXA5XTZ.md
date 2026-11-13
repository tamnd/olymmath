---
tag: GSPSXA5XTZ
kind: problem
type: answer
answer: f(x) = cx
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237461
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f,g: \mathbb{Q}\to \mathbb{Q}$ such that the following two conditions hold:

$$f(g(x)-g(y))=f(g(x))-y \ \ (1)$$

$$g(f(x)-f(y))=g(f(x))-y\ \ (2)$$

for all $x,y \in \mathbb{Q}$.
