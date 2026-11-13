---
tag: 3A2HGWMXEW
kind: problem
type: answer
answer: "23"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185801
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a flat terrain, the staking out of a circular arc with radius $r$ can be done if, in addition, a tangent $t$ to this circular arc and its point of tangency $A$ are known, by erecting perpendiculars to $t$ at arbitrary points $P^{\prime}$ on $t$ (with $A P^{\prime}=x<r$) and laying off on these (on the side of $t$ where the circular arc lies) segments $P^{\prime} P$ such that the points $P$ are points of the desired circular arc. Here, $P^{\prime} P=y<r$.

a) Prove that then $y=\frac{x^{2}}{2 r-y}$ holds!

b) In practice, it often suffices to determine approximate values for $y$. This is done as follows: A first approximate value $y_{1}$ is obtained from the equation $y_{1}=\frac{x^{2}}{2 r}$.

If its accuracy is not sufficient, a second approximate value $y_{2}$ is determined from the equation $y_{2}=\frac{x^{2}}{2 r-y_{1}}$. This process can be continued until the required accuracy is achieved. Investigate whether there is a smallest natural number $n$ with the property that for all positive real numbers $x \leq \frac{1}{n} r$, the relative error $\delta=\frac{\left|y-y_{1}\right|}{r}$ of the approximate value $y_{1}=\frac{x^{2}}{2 r}$ does not exceed 0.001, i.e., $\delta \leq 0.001$.
