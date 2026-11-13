---
tag: PXA59EVKDS
kind: problem
type: answer
answer: f(x) = x^2 \quad \forall x \in \mathbb{R}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : R \to R$ which satisfy $f(x) = max_{y\in R} (2xy - f(y))$ for all $x \in R$.
