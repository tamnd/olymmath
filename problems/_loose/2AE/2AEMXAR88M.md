---
tag: 2AEMXAR88M
kind: problem
type: answer
answer: V(\frac{\tau}{2}+\frac{u}{})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=11169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the reference frame associated with Gavrila, the balls are thrown upwards from the same point with the same speed at intervals of $\tau$ in time. By introducing the $y$-axis, directed vertically upwards with its origin at the point of throwing, and measuring time from the moment the first ball is thrown, we can write the equations of motion for both balls:

$$
y_{1}(t)=U t-\frac{g t^{2}}{2}, y_{2}(t)=U(t-\tau)-\frac{g(t-\tau)^{2}}{2}
$$

where the latter relation is relevant to the problem for $t \geq$ $\tau$. The distance between the balls $s(t)=\left|y_{1}(t)-y_{2}(t)\right|=\mid U \tau-g t \tau+$ $\left.\frac{g \tau^{2}}{2} \right\rvert\,$. We need to find the minimum of this function.

If $2 U \geq g \tau$, there is a value $T=\frac{\tau}{2}+\frac{u}{g} \geq \tau$, at which $s(T)=0$, which is clearly the smallest distance between the balls. Since the interval $\tau$ is small by condition, we will assume that the required inequality is satisfied.

In the considered reference frame, Glafira is moving away from the point of throwing and the line along which the balls fly with a speed $V$, so by the time the balls meet, the distance between her and the balls will be $V T=V\left(\frac{\tau}{2}+\frac{u}{g}\right)$.
