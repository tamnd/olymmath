---
tag: DZFY4VRF24
kind: problem
type: answer
answer: (\4;\9)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Note that the coefficients of the equation 3 and 453 are divisible by 3, then the term $5 y^{2}$ is also divisible by 3, so $y=3 t$, $y^{2}=9 t^{2}$, where $t \in \mathbb{Z}$. The equation takes the form: $3 x^{2}+5 \cdot 9 t^{2}=453, x^{2}+5 \cdot 3 t^{2}=151, x^{2}=151-15 t^{2}, $ where $ x \in \mathbb{Z}$. Substitute possible values of $t \geq 0$.

| Values of $t$ | $15 t^{2}$ | $x^{2}=151-15 t^{2}$ | Integer value of $x$. |
| :--- | :--- | :--- | :--- |
| $t=0$ | 0 | $x^{2}=151$ | no |
| $t=1$ | 15 | $x^{2}=151-15, x^{2}=136$ | no |
| $t=2$ | 60 | $x^{2}=151-60, x^{2}=91$ | no |
| $t=3$ | 135 | $x^{2}=151-135, x^{2}=16$ | $x= \pm 4$ |
| $t=4$ | 240 | $x^{2}=151-240<0$ | no |

Thus, $x= \pm 4, t= \pm 3, y= \pm 9$.
