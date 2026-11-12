---
tag: JZMGTSB6B3
kind: problem
type: answer
answer: \frac{x}{\cos\alpha}=\frac{y}{\cos\beta}=\frac{z}{\cos\gamma}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=44363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The line $l$ passes through the origin, its direction is determined by the unit vector $\vec{e}$, which forms angles $\alpha, \beta$, and $\gamma$ with the coordinate axes $O x, O y, O z$. Any point $M$ on this line defines the radius vector $\vec{r}=\overrightarrow{O M}$, which is collinear with the unit vector $\vec{e}$. The condition of collinearity is written as the equation of the line:

$$
\vec{r}=\overrightarrow{t e}
$$

where $t$ is a variable parameter, ranging over all real values from $-\infty$ to $+\infty$. Convert equation (1) to the coordinate form:

$$
\frac{x}{\cos \alpha}=\frac{y}{\cos \beta}=\frac{z^{1}}{\cos \gamma}
$$
