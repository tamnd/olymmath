---
tag: PD188FHW9C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
First, define an operation for a ternary array: $F(x, y, z)=(x+y+z)(x+y-z)(y+z-x)(x+z-y)$. Now, there are 6 positive numbers that satisfy the following conditions: (let these 6 numbers be $a, b, c, d, e, f$)
1. Any 3 of these 6 numbers, when used as the lengths of 3 line segments, can form an acute triangle.
2. In all the triangles formed in 1, the sum of the lengths of any two altitudes is greater than these 6 numbers.
3. $F(a, b, c)=F(b, d, f)=F(a, e$,
$$
f)=F(e, c, d)
$$

Prove: $a=d, b=e, c=f$.
