---
tag: BQZCCGWTVP
kind: problem
type: answer
answer: x+1,-\frac{1}{3}x+\frac{13}{9}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's form the equation of the common tangent to the graphs of the functions $y=1+x-x^{2}$ and $y=0.5\left(x^{2}+3\right)$. Let $y=a x+b-$ be the equation of the common tangent. Then,

$1+x-x^{2}=a x+b, x^{2}+(a-1) x+b-1=0$.

$D=(a-1)^{2}-4 b+4=0, a^{2}-2 a-4 b+5=0$.

$0.5\left(x^{2}+3\right)=a x+b, x^{2}-2 a x-2 b+3=0$.

$D / 4=a^{2}-(-2 b+3)=0, a^{2}+2 b-3=0$.

From $(*)$ and (**) we get $3 a^{2}-2 a-1=0, a_{1}=1, a_{2}=-1 / 3$.

$$
b=\frac{3-a^{2}}{2}, b_{1}=1, b_{2}=\frac{13}{9}
$$
