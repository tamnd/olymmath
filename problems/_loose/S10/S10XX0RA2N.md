---
tag: S10XX0RA2N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Set $S$ has an operation +, for all elements $a, b, c$ in $S$ there is $(a+c)+(b+c)=a+b$; and there is an element $a$ in $S$ such that $a+e=a, a+a=e$, define $a * b = a+(e+b)$. Prove: for all elements $a, b, c$ in $S$,
$$
(a * b) * c = a * (b * c).
$$
