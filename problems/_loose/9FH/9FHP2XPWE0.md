---
tag: 9FHP2XPWE0
kind: problem
type: answer
answer: (z)=\frac{1}{\sqrt{2\pi}}\mathrm{e}^{-z^{2}/4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Independent normally distributed random variables $X$ and $Y$ are given by the probability density functions:

$$
f_{1}(x)=(1 / \sqrt{2 \pi}) e^{-x^{2} / 2}, f_{2}(y)=(1 / \sqrt{2 \pi}) e^{-y^{2} / 2}
$$

Prove that the composition of these laws, i.e., the probability density function of the random variable $Z=X+Y$, is also a normal distribution.
