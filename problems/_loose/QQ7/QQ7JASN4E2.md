---
tag: QQ7JASN4E2
kind: problem
type: answer
answer: a + b + c > r + r_a + r_b + r_c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let ABC be a triangle and let $r, r_a, r_b, r_c$ denote the inradius and ex-radii opposite to the vertices $A, B, C$, respectively. Suppose that $a>r_a, b>r_b, c>r_c$. Prove that
**(a)** $\triangle ABC$ is acute.
**(b)** $a+b+c > r+r_a+r_b+r_c$.
