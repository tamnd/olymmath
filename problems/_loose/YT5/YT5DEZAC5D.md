---
tag: YT5DEZAC5D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h67928
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66709
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=258180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
Let $ f(x)$ be a function with the two properties:

- for any two real numbers $ x$ and $ y$ , $ f(x + y) = x + f(y)$ , and

- $ f(0) = 2$

What is the value of $ f(1998)$ ? $ \textbf{(A)}\ 0 \textbf{(B)}\ 2 \textbf{(C)}\ 1996 \textbf{(D)}\ 1998 \textbf{(E)}\ 2000$
