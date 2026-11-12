---
tag: MY0ZD4HCAS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(X, Y)$ be a Gaussian system, where $Y$ is a random variable and $X$ is a vector. Prove that the conditional expectation $\mathrm{E}(Y \mid X)$ coincides almost surely with the optimal linear estimates $\widehat{\mathrm{E}}(Y \mid X)=\alpha+\beta^{*} X$ for

$$
(\alpha, \beta) \in \operatorname{Arg} \min _{a, b} \mathrm{E}\left|Y-a-b^{*} X\right|^{2}
$$
