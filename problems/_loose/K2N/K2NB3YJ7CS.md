---
tag: K2NB3YJ7CS
kind: problem
type: answer
answer: I = \frac{21\pi}{8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213944
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $u$ be a real number. On the coordinate plane, consider two parabolas $C_1: y=-x^2+1,\ C_2: y=(x-u)^2+u$.
The range of $u$ such that $C_1$ and $C_2$ have at least one point of intersection is expressed by $a\leq u\leq b$ for some real numbers $a,\ b$.

(1) Find the values of $a,\ b$.

(2) When $u$ satisfies $a\leq u\leq b$, let $P_1(x_1,\ y_1),\ P_2(x_2,\ y_2)$ be the point of intersections of $C_1$ and $C_2$.

Note : if the point of intersection is just one, then we regard the intersection as $P_1=P_2$.

Express $2|x_1y_2-x_2y_1|$ in terms of $u$.

(3) Let $f(u)$ be the expression obtained in (2), evaluate $I=\int_ a^b f(u)du.$
