---
tag: CHZCGBN671
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that the Laplace transform $E e^{-\lambda \mathscr{R}^{2}}, \lambda>0$, of the square $\mathscr{R}^{2}$ of the "range" $\mathscr{R}$ of the Brownian bridge $B^{\circ}=\left(B_{t}^{\circ}\right)_{0 \leqslant t \leqslant 1}$, i.e., the random variable

$$
\mathscr{R}=\max _{0 \leqslant t \leqslant 1} B_{t}^{\circ}-\min _{0 \leqslant t \leqslant 1} B_{t}^{\circ}
$$

is given by the formula

$$
\mathrm{E} e^{-\lambda \mathscr{R}^{2}}=\left(\frac{\sqrt{2 \lambda}}{\operatorname{sh} \sqrt{2 \lambda}}\right)^{2}
$$

In establishing this result, it is useful to refer to the explicit form of the distribution function obtained by Dub using the reflection principle:

$$
\mathrm{P}\left(\mathscr{R}^{2} \leqslant x\right)=\sum_{n=-\infty}^{\infty}\left(1-n^{2} \pi^{2} x\right) e^{-n^{2} \pi^{2} x / 2}, x \geqslant 0 .
$$
