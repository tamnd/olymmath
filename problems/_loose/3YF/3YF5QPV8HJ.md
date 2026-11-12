---
tag: 3YF5QPV8HJ
kind: problem
type: answer
answer: x\cos\alpha+y\cos\beta+z\cos\gamma=p
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=44371
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A perpendicular [OP] is drawn from the origin to a given plane, defining the distance from this plane to the origin. Let's introduce the following notations: $\vec{p}=\overrightarrow{O P},|\vec{p}|=p-$ the mentioned distance; $\vec{e}$-the unit vector of $\vec{p}$ (then $\vec{p}=p \vec{e}$ ); $\alpha, \beta, \gamma-$ the angles between
the unit vector $\vec{e}$ and the coordinate axes. Similarly to how the equation of a line in coordinates was derived on a plane, derive the equation of a plane in space:

a) in vector form: $\vec{r} \vec{e}=p$;

b) in coordinate form:

$$
x \cos \alpha+y \cos \beta+z \cos \gamma=p
$$

The last equation will be called the normal equation of the plane.
