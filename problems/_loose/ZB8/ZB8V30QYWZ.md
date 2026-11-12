---
tag: ZB8V30QYWZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a random variable with a gamma distribution with density

$$
f(x ; \alpha, \lambda)=\frac{\lambda^{\alpha}}{\Gamma(\alpha)} x^{\alpha-1} e^{-\lambda x} I(x>0)
$$

where $\alpha, \lambda>0$ and

$$
\Gamma(\alpha)=\int_{0}^{\infty} x^{\alpha-1} e^{-x} d x
$$

Show that

$$
\mathrm{E} X=\frac{\alpha}{\lambda}, \mathrm{D} X=\frac{\alpha}{\lambda^{2}}
$$

and generally for all $p>-\alpha$ the equality holds

$$
\mathrm{E} X^{p}=\frac{1}{\lambda^{p}} \frac{\Gamma(\alpha+p)}{\Gamma(\alpha)}
$$

Also establish that the Laplace transform of the variable $X$ is given by the formula

$$
\mathrm{E} e^{-s X}=\frac{\lambda^{\alpha}}{(\lambda+s)^{\alpha}}, s>0
$$
