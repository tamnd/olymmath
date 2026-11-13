---
tag: GVWR5HFJPV
kind: problem
type: answer
answer: f(x,y)=xy
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x, y)$ be a quadratic polynomial, and (1) $f(1,2)=2$; (2) $y f(x, f(x, y))=x \cdot f(f(x, y), y)=(f(x, y))^{2}$. Find all $f(x, y)$.
