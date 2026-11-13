---
tag: HEZSN6XS58
kind: problem
type: answer
answer: (-1, -2, 2, 0), (0, 0, 0, 0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220313
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all quadruples of real numbers $(a,b,c,d)$ such that the equalities
$$X^2 + a X + b = (X-a)(X-c) \text{ and } X^2 + c X + d = (X-b)(X-d)$$
hold for all real numbers $X$.

*Morteza Saghafian, Iran*
