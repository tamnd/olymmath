---
tag: YWNT1X038G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263886
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two integers $x$ and $y$, let $(x \| y)$ denote the *concatenation* of $x$ by $y$, which is obtained by appending the digits of $y$ onto the end of $x$. For example, if $x=218$ and $y=392$, then $(x \| y) = 218392$.
(a) Find 3-digit integers $x$ and $y$ such that $6(x \| y) = (y \| x)$.
(b) Find 9-digit integers $x$ and $y$ such that $6(x \| y) = (y \| x)$.
