---
tag: S9FDMAWPA3
kind: problem
type: answer
answer: -for\in(-2;0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The first equation is reduced to the form $(x+y)^{2}+(y-a)^{2}=0$, from which we obtain $x=-a ; y=a$. Substitution into the inequality gives:

$$
2^{-2-a} \cdot \log _{2}(-a)<1 \Longleftrightarrow \log _{2}(-a)<2^{2+a}
$$

Equality is achieved at $a=-2$, and due to monotonicity we get $a \in$ $(-2 ; 0)$.
