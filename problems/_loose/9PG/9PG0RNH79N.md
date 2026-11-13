---
tag: 9PG0RNH79N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h287223
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44869
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2007
    source: hf-ai-mo-aops
    label: 2007 Irish Math Olympiad
---
Suppose that $ a$ and $ b$ are real numbers such that the quadratic polynomial $ f(x)=x^2+ax+b$ has no nonnegative real roots. Prove that there exist two polynomials $ g,h$ whose coefficients are nonnegative real numbers such that: $ f(x)=\frac{g(x)}{h(x)}$ for all real numbers $ x$ .
