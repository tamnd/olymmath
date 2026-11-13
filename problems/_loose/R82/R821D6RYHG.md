---
tag: R821D6RYHG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all continuous functions $f : (0,+\infty) \to (0,+\infty)$ such that if $a, b, c$ are the lengths of the sides of any triangle then it is satisfied that $$\frac{f(a+b-c)+f(b+c-a)+f(c+a-b)}{3}=f\left(\sqrt{\frac{ab+bc+ca}{3}}\right)$$
