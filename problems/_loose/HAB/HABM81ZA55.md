---
tag: HABM81ZA55
kind: problem
type: answer
answer: "0.85"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30669
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The distribution of the random variable $X$ is given by the following table:

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $p(x)$ | 0.05 | 0.10 | 0.25 | 0.30 | 0.20 | 0.10 |

What is the probability that $|X-E X|<2$? Estimate this probability using Chebyshev's inequality.
