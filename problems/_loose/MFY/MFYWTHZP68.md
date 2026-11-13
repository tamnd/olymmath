---
tag: MFYWTHZP68
kind: problem
type: answer
answer: A=1,B=1,C=-1,D=-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's determine the numbers $A, B, C, D$ such that

$$
\frac{A}{x+1}+\frac{B}{(x+1)^{2}}+\frac{C x+D}{x^{2}+x+1}=\frac{1}{(x+1)^{2} \cdot\left(x^{2}+x+1\right)}
$$

holds for all $x$ different from $-1$.
