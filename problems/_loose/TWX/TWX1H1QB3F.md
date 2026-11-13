---
tag: TWX1H1QB3F
kind: problem
type: answer
answer: f(x) = \sqrt{ax + c - x^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243528
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a positive real number. Determine all functions $f:[-k, k]\rightarrow[0, k]$ satisfying the equation
$$f(x)^2+f(y)^2-2xy=k^2+f(x+y)^2$$
for any $x, y\in[-k, k]$ such that $x+y\in[-k, k]$.

*Proposed by Maximiliano Sánchez*
