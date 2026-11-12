---
tag: V5JJSNRMRF
kind: problem
type: answer
answer: x\cos\varphi+y\sin\varphi=p
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=44238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the coordinate plane, there is a line $l, O \perp l$. Consider a vector $\overrightarrow{O P}=\vec{p}$, where $P \in l$; then $p=|\vec{p}|$ is the distance from the line to the origin. Denote by $\varphi$ the angle that $\vec{e}=\frac{\vec{p}}{p}$, the unit vector of $\vec{p}$, forms with the unit vector $\vec{i}$. Let $\vec{r}=\overrightarrow{O M}$ be the variable radius vector of an arbitrary point $M \in l$. Taking into account that the vector $\overrightarrow{P M}=\vec{r}-\vec{p}$ is perpendicular to the vector $\vec{p}$, derive the vector equation of the line $l$ in the form $\vec{r} \cdot \vec{e}=\vec{p} \cdot \vec{e}$ and then from this, obtain the normal equation of the line $l$ in coordinates: $x \cos \varphi + y \sin \varphi = p$.

Discuss the cases of different positions of the line relative to the coordinate axes.
