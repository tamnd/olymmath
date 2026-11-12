---
tag: R1XCFQVA49
kind: problem
type: answer
answer: EX=e^{+\frac{\sigma^{2}}{2}},\quadDX=e^{2+\sigma^{2}}(e^{\sigma^{2}}-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
When studying the distribution of income or property, in some cases, each specific value of property can be considered as the result of the action of a large number of mutually independent factors, each of which causes some increment proportional to the already achieved level of income. In this case, the amount of income can be considered to be distributed according to the so-called log-normal law, where the density of distribution is determined by the formula

$$
p(x)=\left\{\begin{array}{cc}
0 & \text { for } x \leqslant 0 \\
\frac{1}{\sigma x \sqrt{2 \pi}} \cdot e^{-\frac{(\ln x-a)^{2}}{2 \sigma^{2}}} & \text { for } x>0
\end{array}\right.
$$

Find the mathematical expectation and variance of this random variable.
