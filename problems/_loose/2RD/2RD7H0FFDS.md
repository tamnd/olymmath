---
tag: 2RD7H0FFDS
kind: problem
type: answer
answer: \frac{5}{8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The center of the sphere coincides with the center $O$ of triangle $ABC$. If the sphere intersects the edge $SB$ at point $P$, then $OP = OB$ and the perpendicular $OQ$ to the edge $SB$ is the median of triangle $POB$. Let the side of the base be denoted by $a$, and $\alpha = \operatorname{arctg} 3$. Let $M$ be the foot of the perpendicular from point $B$ to side $AC$. We find $OM = \frac{a \sqrt{3}}{6}, SO = \frac{a \sqrt{3}}{6} \operatorname{tg} \alpha$. The right triangles $SOB$ and $OQB$ are similar: $\frac{BQ}{BO} = \frac{BO}{SB}$. We get: $\frac{BQ}{SB} = \frac{BO^2}{SB^2} = \frac{4}{4 + \operatorname{tg}^2 \alpha}, \frac{SP}{PB} = \left(1 - 2 \frac{BQ}{SB}\right) : 2 \frac{BQ}{SB} = \frac{\operatorname{tg}^2 \alpha - 4}{8} = \frac{5}{8}$.
