---
tag: F9VAJNX8D1
kind: problem
type: answer
answer: (x,y,z)=(\frac{b+}{2},\frac{+}{2},\frac{+b}{2})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161659
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given are positive numbers $a, b$ and $c$. Determine all triples of positive numbers $(x, y, z)$ such that

$$
x+y+z=a+b+c \text { and } 4 x y z-a^{2} x-b^{2} y-c^{2} z=a b c .
$$
