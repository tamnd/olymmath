---
tag: 6RXAATQ2B2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \xi_{2}, \xi_{3}$ be independent random variables distributed according to the law $\mathscr{N}(0,1)$. Show that the quantities

$$
\frac{\xi_{1}+\xi_{2} \xi_{3}}{\sqrt{1+\xi_{3}^{2}}}, \Phi^{-1}\left(\frac{\left|\xi_{1}\right|}{\sqrt{\xi_{1}^{2}+\xi_{2}^{2}+\xi_{3}^{2}}}\right), \frac{\left[f^{2}\left(\xi_{3}\right)-g^{2}\left(\xi_{3}\right)\right] \xi_{1}+2 f\left(\xi_{3}\right) g\left(\xi_{3}\right) \xi_{2}}{f^{2}\left(\xi_{3}\right)+g^{2}\left(\xi_{3}\right)}
$$

are also distributed according to the law $\mathscr{N}(0,1)$, where $\Phi-$ is the distribution function of the variable $\xi_{1}$, and $f=f(x)$ and $g=g(x)$ are polynomials.

Remark. In this context, an interesting problem arises of describing all nonlinear transformations of $n \geqslant 2$ independent and identically distributed Gaussian variables $\xi_{1}, \ldots, \xi_{n}$, the distribution of which is also Gaussian. As established in the work [8], any transformation that preserves normality and is an entire sufficiently slowly growing function (real on $\mathbb{R}^{n}$) is linear.
