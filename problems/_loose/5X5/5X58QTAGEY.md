---
tag: 5X58QTAGEY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f : R \to R$ such that $f(x) \ge 0$ for all positive reals $x$, $f(0) = 0$ and for all reals $x, y$
$$f(x + y -xy) = f(x) + f(y) - f(xy).$$
