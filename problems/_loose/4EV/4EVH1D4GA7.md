---
tag: 4EVH1D4GA7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215741
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x) = \frac{1}{1-\frac{3x}{16}}$. Consider the sequence $\{ 0, f(0), f(f(0)), f^3(0), \dots \}$ Find the smallest $L$ such that $f^n(0) \leq L$ for all $n$. If the sequence is unbounded, write none as your answer.
