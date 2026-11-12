---
tag: WWSTTA4KNS
kind: problem
type: answer
answer: 2,4or4,2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2046
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A(x ; y)$ be a vertex of a square with its center at the origin, for which $\operatorname{GCD}(x, y)=2$. We will calculate the length of the diagonal of the square $d=2 \sqrt{x^{2}+y^{2}}$ and find the area of the square $S=\frac{d^{2}}{2}=2\left(x^{2}+y^{2}\right)$. According to the problem, $S=10 \operatorname{LCM}(x, y)$. As a result, we have the equation:

$$
2\left(x^{2}+y^{2}\right)=10 \operatorname{LCM}(x, y) .
$$

Using the property $\operatorname{GCD}(x, y) \cdot \operatorname{LCM}(x, y)=x y$, we get

$$
\operatorname{LCM}(x, y)=\frac{x y}{\operatorname{GCD}(x, y)}=\frac{x y}{2} .
$$

Substituting $\operatorname{LCM}(x, y)$ into the equation above, we have

$$
2\left(x^{2}+y^{2}\right)=5 x y .
$$

Dividing the last equation by $y^{2}$, we get a quadratic equation in terms of $\frac{x}{y}$:

$$
2 \frac{x^{2}}{y^{2}}-5 \frac{x}{y}+2=0
$$

This equation has solutions $x=2 y$ and $y=2 x$.

Case 1. $x=2 y$. Then $\operatorname{GCD}(x, y)=\operatorname{GCD}(2 y, y)=y=2$, and $x=4$.

Case 2. $y=2 x$. Then $\operatorname{GCD}(x, y)=\operatorname{GCD}(x, 2 x)=x=2$, and $y=4$.
