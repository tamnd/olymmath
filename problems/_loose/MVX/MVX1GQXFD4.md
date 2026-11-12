---
tag: MVX1GQXFD4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34053
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Hinchin's Criterion.) Show that the characteristic function $\varphi=\varphi(t)$ of any absolutely continuous distribution with density $f=f(x)$ can be represented in the form

$$
\varphi(t)=\int_{\mathbb{R}} \phi(t+s) \overline{\phi(s)} d s, t \in \mathbb{R}
$$

for some complex-valued function $\phi$ satisfying the condition $\int_{\mathbb{R}}|\phi(s)|^{2} d s=1$. Assume for simplicity that

$$
\int_{\mathbb{R}} \sqrt{f(x)} d x<\infty, \int_{\mathbb{R}} d t\left|\int_{\mathbb{R}} e^{i t x} \sqrt{f(x)} d x\right|<\infty
$$
