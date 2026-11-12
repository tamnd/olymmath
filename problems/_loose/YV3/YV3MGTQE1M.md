---
tag: YV3MGTQE1M
kind: problem
type: answer
answer: \frac{\pi}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33804
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the function defined on $[0, \infty)$

$$
f(x)= \begin{cases}1, & x=0 \\ \frac{\sin x}{x}, & x>0\end{cases}
$$

is Riemann integrable and the integral of it is the Dirichlet integral

$$
(\mathrm{R}) \int_{0}^{\infty} f(x) d x=\frac{\pi}{2}
$$

However, establish that the function $f(x)$ is not Lebesgue integrable.
