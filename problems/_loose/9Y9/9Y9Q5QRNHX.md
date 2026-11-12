---
tag: 9Y9Q5QRNHX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33910
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ and $Y$ be random variables with finite second moments.

(a) Assuming the independence of $X$ and $Y$, prove the equality

$$
\mathrm{D}(X Y)=\mathrm{D} X \cdot \mathrm{D} Y+\mathrm{D} X \cdot(\mathrm{E} X)^{2}+\mathrm{D} Y \cdot(\mathrm{E} X)^{2} .
$$

(b) For arbitrary $X$ and $Y$, establish the inequality

$$
\operatorname{cov}^{2}(X, Y) \leqslant \mathrm{D} X \cdot \mathrm{D} Y
$$

Determine when equality holds here.

(c) Show that

$$
\rho(a X+b, c Y+d)=\rho(X, Y) \cdot \operatorname{sign}(a c),
$$

where $a, b, c, d \in \mathbb{R}, \rho(X, Y)$ is the correlation coefficient between $X$ and $Y$, and $\operatorname{sign} x=1$ if $x>0$, $0$ if $x=0$, and $-1$ if $x<0$.
