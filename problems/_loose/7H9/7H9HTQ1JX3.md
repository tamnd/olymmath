---
tag: 7H9HTQ1JX3
kind: problem
type: answer
answer: M(X)=M(Y)=\frac{\sqrt{\pi}}{2},\quadD(X)=D(Y)=1-\frac{\pi}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The joint density function of a continuous two-dimensional random variable $(X, Y)$ is given by:

$$
f(x, y)= \begin{cases}4 x y e^{-x^{2}-y^{2}} & (x>0, y>0) \\ 0 & (x<0 \text { or } y<0) .\end{cases}
$$

Find: a) the expectations; b) the variances of the components $X$ and $Y$.
