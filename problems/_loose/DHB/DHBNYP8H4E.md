---
tag: DHBNYP8H4E
kind: problem
type: answer
answer: \rho_{\Phi(X)\Phi(Y)}=\frac{6}{\pi}\arcsin\frac{\rho}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(X, Y)$ be a two-dimensional Gaussian vector with $\mathrm{E} X=\mathrm{E} Y=0$, $\mathrm{D} X=\mathrm{D} Y=1$ and correlation coefficient $\rho=\mathrm{E} X Y$. Show that the correlation coefficient $\rho_{\Phi(X) \Phi(Y)}$ of the quantities $\Phi(X)$ and $\Phi(Y)$ is given by the formula

$$
\rho_{\Phi(X) \Phi(Y)}=\frac{6}{\pi} \arcsin \frac{\rho}{2}
$$

where $\Phi=\Phi(x)$ is the distribution function of the law $\mathscr{N}(0,1)$.
