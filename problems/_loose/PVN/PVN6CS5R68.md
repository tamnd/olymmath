---
tag: PVN6CS5R68
kind: problem
type: answer
answer: M = \text{lcm}(l_1, l_2, \ldots, l_k)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a bijective function from $A = \{ 1, 2, \ldots, n \}$ to itself. Show that there is a positive integer $M$ such that $f^{M}(i) = f(i)$ for each $i$ in $A$, where $f^{M}$ denotes the composition $f \circ f \circ \cdots \circ f$ $M$ times.
