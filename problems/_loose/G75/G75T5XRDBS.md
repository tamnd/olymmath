---
tag: G75T5XRDBS
kind: problem
type: answer
answer: f(x,y,z)=\frac{y+\sqrt{y^2+4xz}}{2x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the functions $ f: \left(\mathbb{R}_{+}^{*}\right)^{3} \rightarrow \mathbb{R}_{+}^{*} $ such that for all real numbers $ x, y, z, t $, we have

$$
\begin{aligned}
x f(x, y, z) & = z f(z, y, x) \\
f\left(x, t y, t^{2} z\right) & = t f(x, y, z) \\
f(1, k, k+1) & = k+1
\end{aligned}
$$
