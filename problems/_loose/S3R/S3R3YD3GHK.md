---
tag: S3R3YD3GHK
kind: problem
type: answer
answer: p(x)=\begin{cases}0&\text{for}x\leq0\\\frac{2x}{(1+x^{2})^{2}}&\text{for}x>0\end{cases}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33001
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The distribution function of a random variable $X$ is given by

$$
F(x)= \begin{cases}0 & \text { if } x \leq 0 \\ \frac{x^{2}}{1+x^{2}} & \text { if } x>0\end{cases}
$$

Find its probability density function.
