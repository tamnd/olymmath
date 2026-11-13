---
tag: ZZY1RPJ24E
kind: problem
type: answer
answer: (1,0,0),(0,1,0),(0,0,1),(2,-1,-1),(-1,2,-1),(-1,-1,2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117477
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integer solutions $a, b, c$ that satisfy $\frac{1}{2}(a+b)(b+c)(c+a)+(a+b+c)^{3}=1-a b c$, and provide necessary proof.
