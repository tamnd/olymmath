---
tag: Z5HP9HMEJ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(X, Y)$ be a two-dimensional Gaussian vector with $\mathrm{E} X=\mathrm{E} Y=0$, $\mathrm{E} X^{2}=\mathrm{E} Y^{2}=1$ and correlation coefficient $\rho=\mathrm{E} X Y$.
(a) Show that the quantities $X$ and $Z=(Y-\rho X) / \sqrt{1-\rho^{2}}$ are independent $\mathscr{N}(0,1)$-distributed.

(b) Prove that

$$
\mathrm{P}(X>0, Y>0)=\mathrm{P}(X0, Y>0)=\frac{1}{2 \pi \sqrt{1-\rho^{2}}} \\
\mathrm{P}(X>0, Y0)=\frac{1}{4}-\frac{1}{2 \pi} \arcsin \rho \\
\mathrm{P}(X Y0) \text{ the following inequalities hold: }

$$
\begin{aligned}
{[1-\Phi(a)][1-\Phi(c)] } & \leqslant \mathrm{P}(X>a, Y>b) \leqslant \\
& \leqslant[1-\Phi(a)][1-\Phi(c)]+\frac{\rho \varphi(b)}{\varphi(a)}[1-\Phi(a)][1-\Phi(d)]
\end{aligned}
$$

where $c=(b-a \rho) / \sqrt{1-\rho^{2}}, d=(a-b \rho) / \sqrt{1-\rho^{2}}$ and $\varphi(x)=\Phi^{\prime}(x)-$ the standard normal density.
