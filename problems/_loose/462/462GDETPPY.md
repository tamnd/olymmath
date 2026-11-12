---
tag: 462GDETPPY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33889
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Let random variables $X$ and $Y$ have a joint density function $f=f(x, y)$ of the form $f(x, y)=g\left(x^{2}+y^{2}\right)$. Let $R$ and $\theta$ be the polar coordinates:

$$
X=R \cos \theta, Y=R \sin \theta
$$

Show that $R$ and $\theta$ are independent, and that the variable $\theta$ is uniformly distributed on $[0,2 \pi)$.

(b) Let

$$
\binom{X_{\alpha}}{Y_{\alpha}}=\left(\begin{array}{cc}
\cos \alpha & \sin \alpha \\
-\sin \alpha & \cos \alpha
\end{array}\right)\binom{X}{Y}, \alpha \in[0,2 \pi) .
$$

We will say that the distribution of the vector $(X, Y)$ is invariant under rotation if the relation $\left(X_{\alpha}, Y_{\alpha}\right) \stackrel{d}{=}(X, Y)$ holds for any $\alpha \in[0,2 \pi)$.

Prove that the distribution of the vector $(X, Y)$, having density $f=f(x, y)$, is invariant under rotation if and only if $f$ can be represented in the form $f(x, y)=g\left(x^{2}+y^{2}\right)$.
