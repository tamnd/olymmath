---
tag: ASK01N6MES
kind: problem
type: answer
answer: ^{2}=R^{2}(1+\frac{4(P_{1}P_{2}P_{3})}{(ABC)})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=44146
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Perpendiculars $P P_{1}, P P_{2}, P P_{3}$ are dropped from point $P$ to the sides of triangle $A B C$. Prove that the distance $d$ from point $P$, located inside the circumscribed circle, to its center $O$ is determined by the formula:

$$
d^{2}=R^{2}\left(1-\frac{4\left(P_{1} P_{2} P_{8}\right)}{(A B C)}\right)
$$

How will the formula change if point $P$ lies outside the circumscribed circle?
