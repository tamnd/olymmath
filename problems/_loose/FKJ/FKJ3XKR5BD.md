---
tag: FKJ3XKR5BD
kind: problem
type: answer
answer: "Yes"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatian Mathematical Olympiad
---
Let $P(x), Q(x) \in \mathbb{R}[x]$ be polynomials with real coefficients such that
$$
P(P(x)) = (Q(x))^2
$$
holds for all real numbers $x$.
Does there necessarily exist a polynomial $R(x) \in \mathbb{R}[x]$ with real coefficients such that $P(x) = (R(x))^2$ holds for all real numbers $x$?
