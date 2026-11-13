---
tag: G00XV7HHYK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109756
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a string $S$ consisting of characters " $\bigcirc$ " and " $\diamond$ ". Let $\Delta(S)$ denote the difference between the number of " $\diamond$ " and "○" in the string $S$ (for example, $\Delta(\diamond \bigcirc \bigcirc \diamond \bigcirc \bigcirc \diamond)=-1)$. If every substring $T$ of the string $S$ satisfies $-2 \leqslant \Delta(T) \leqslant 2$, then the string $S$ is called "balanced" (a substring is a sequence of consecutive characters in the string $S$). Find the number of balanced strings of length $n$. ${ }^{[3]}$
(2007, Indian National Team Selection Exam)
