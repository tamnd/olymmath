---
tag: SPN7SMNCMY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33783
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ and $\zeta$ be integrable random variables. Show that

$$
\begin{aligned}
& \mathrm{E} \xi - \mathrm{E} \zeta = \int_{\mathbb{R}} [\mathrm{P}(\xi > x) + \mathrm{P}(\zeta > x) - 2 \mathrm{P}(\xi > x, \zeta > x)] d x
\end{aligned}
$$

Remark. Note also that for $p > 1$ the following formulas hold:

$$
\begin{aligned}
\mathrm{E}|\xi - \zeta|^{p} = p(p-1) & \int_{\mathbb{R}^{2}} \mathrm{P}(\xi > x \geq y \geq \zeta) |x - y|^{p-2} d x d y + \\
& + p(p-1) \int_{\mathbb{R}^{2}} \mathrm{P}(\xi \leq x \leq y < \zeta) |x - y|^{p-2} d x d y
\end{aligned}
$$
