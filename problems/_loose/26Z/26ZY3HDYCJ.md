---
tag: 26ZY3HDYCJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the grouped frequency distribution of some random variable $\xi$, found in the example of section 7.1 (p. 332). Using the Pearson's chi-squared test, verify the hypothesis $H_{0}: \mathrm{P}(\xi \leqslant x)=F(x)=1-e^{-\lambda x}$ against the hypothesis $H_{1}: \mathrm{P}(\xi \leqslant x) \neq F(x)$ at the significance level $\alpha=0.02$. The parameter $\lambda=1.7205$ is determined from the sample.
