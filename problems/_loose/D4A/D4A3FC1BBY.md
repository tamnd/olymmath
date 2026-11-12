---
tag: D4A3FC1BBY
kind: problem
type: answer
answer: P(5)=91,P(6)=163,P(7)=267,P(8)=409,P(9)=595,P(10)=831
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32884
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the polynomial $P(x)=x^{3}-2 x^{2}+3 x+1$. Known are its

$$
x_{0}=0, x_{1}=1, x_{2}=2, x_{3}=3:
$$

$P(0)=1, P(1)=3, P(2)=7, P(3)=19$. Find the values of the polynomial at $x_{k}=k (k=4,5,6,7,8,9,10)$.
