---
tag: T0D0ZJA8KX
kind: problem
type: answer
answer: z_{2021}=\frac{\sqrt{3}}{2}+(\frac{1}{2}+\frac{1}{2^{2020}})\mathrm{i}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Question 136, Given the complex sequence $\left\{z_{n}\right\}$ satisfies: $z_{1}=\frac{\sqrt{3}}{2}, z_{n+1}=\overline{z_{n}}\left(1+z_{n} i\right)(n=1, 2, \ldots)$, where $\mathrm{i}$ is the imaginary unit. Find the value of $\mathrm{z}_{2021}$.
