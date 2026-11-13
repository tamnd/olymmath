---
tag: NA310TZTJC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133974
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Definition of $\alpha$-convex function:

Let $f(x)$ be a function defined on a subset $D$ of $\mathbf{R}$. A constant $\alpha \in(0,1)$, if for $\forall x_{1}, x_{2} \in D$, we have $\alpha x_{1} + (1-\alpha) x_{2} \in D$, and
$\alpha f\left(x_{1}\right) + (1-\alpha) f\left(x_{2}\right) \geqslant f\left[\alpha x_{1} + (1-\alpha) x_{2}\right]$,
then $f(x)$ is called an $\alpha$-convex function on $D$; when $-f(x)$ is an $\alpha$-convex function on $D$, $f(x)$ is called an $\alpha$-concave function on $D$.
When $\alpha=\frac{1}{2}$ in (1), $f(x)$ is usually called a midpoint convex function on $D$, also known as a Jensen convex function, or simply a $\mathrm{J}$-convex function.
If $f(x)$ is an $\alpha$-convex function on $D$, then
(1) $f(x)$ must be a $\mathrm{J}$-convex function on $D$, i.e., for $\forall x_{1} \in D(i=1,2)$, we have $f\left(x_{1}\right) + f\left(x_{2}\right) \geqslant 2 f\left(\frac{x_{1} + x_{2}}{2}\right)$.
(2) $f(x)$ is a $\frac{\alpha^{n}}{\alpha^{n} + (1-\alpha)^{n}}(n \in \mathbf{N}, n \geqslant 1)$-convex function on $D$, i.e., for $\forall x, \in D(i=1,2)$, we have $\frac{\alpha^{n} f\left(x_{1}\right) + (1-\alpha)^{n} f\left(x_{2}\right)}{\alpha^{n} + (1-\alpha)^{n}} \geqslant f\left[\frac{\alpha^{n} x_{1} + (1-\alpha)^{n} x_{2}}{\alpha^{n} + (1-\alpha)^{n}}\right]$.
