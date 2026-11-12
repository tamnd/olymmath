---
tag: 9XGD9NE9GP
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=19488
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of natural numbers $x$ and $y$ such that

$$
\log _{2} a x+\log _{2} b y=\log _{2}\left(b x+a y+p_{1} p_{2}-1\right), \text { where } p_{1}, p_{2} \in \mathbb{P} a, b>2
$$

In your answer, write the smallest possible value of $x+y$.
