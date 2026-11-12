---
tag: 55QHEXADPA
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The equation is transformed into the form

$$
t^{\alpha}=\alpha(t+1), \alpha=\lg 2 \in(0,1), t=x^{2}-3>0
$$

where:

1) the left side of the equation is a concave up function (since $\alpha \in(0 ; 1)$), defined for $t \geqslant 0$
2) the right side of the equation is a linear function with a positive slope
3) at $t=0$, the value of the left side is less than the value of the right side; at $t=1$, the value of the left side is, on the contrary, greater than the value of the right side, since

$$
1^{\alpha}=\lg 10>\lg 4=\alpha \cdot(1+1)
$$

Therefore, the graphs intersect at two points (one between 0 and 1, the other to the right of 1), each of which generates two roots of the original equation.
