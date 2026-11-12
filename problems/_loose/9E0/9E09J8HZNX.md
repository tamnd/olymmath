---
tag: 9E09J8HZNX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33944
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a random variable having a beta distribution with density

$$
f(x ; \alpha, \beta)=\frac{x^{\alpha-1}(1-x)^{\beta-1}}{\mathrm{~B}(\alpha, \beta)} I(0<x<1)
$$

where $\alpha>0$, $\beta>0$ and

$$
\mathrm{B}(\alpha, \beta)=\frac{\Gamma(\alpha) \Gamma(\beta)}{\Gamma(\alpha+\beta)}=\int_{0}^{1} x^{\alpha-1}(1-x)^{\beta-1} d x .
$$

Show that

$$
\mathrm{E} X=\frac{\alpha}{\alpha+\beta}, \mathrm{D} X=\frac{\alpha \beta}{(\alpha+\beta+1)(\alpha+\beta)^{2}}
$$

and generally for all $p>-\alpha$ the equality holds

$$
\mathrm{E} X^{p}=\frac{\mathrm{B}(\alpha+p, \beta)}{\mathrm{B}(\alpha, \beta)}
$$
