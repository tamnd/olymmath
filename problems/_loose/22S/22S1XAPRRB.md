---
tag: 22S1XAPRRB
kind: problem
type: answer
answer: (x_0, y_0, z_0) = (2\delta + \kappa, -\delta, -\delta)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $ f(x,y,z)=\frac{x^2+y^2+z^2}{x+y+z}$ is defined for every $ x,y,z \in R$ whose sum is not 0. Find a point $ (x_0,y_0,z_0)$ such that $ 0 < x_0^2+y_0^2+z_0^2 < \frac{1}{1999}$ and $ 1.999 < f(x_0,y_0,z_0) < 2$.
