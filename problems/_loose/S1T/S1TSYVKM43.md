---
tag: S1TSYVKM43
kind: problem
type: answer
answer: "0.6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The quality control department inspected $n=200$ batches of identical products and obtained the following empirical distribution (the first row indicates the number $x_{i}$ of non-standard items in one batch; the second row indicates the frequency $n_{i}$, i.e., the number of batches containing $x_{i}$ non-standard items);

| $x_{i}$ | 0 | 1 | 2 | 3 | 4 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $n_{i}$ | 116 | 56 | 22 | 4 | 2 |

It is required to test the hypothesis at a significance level of 0.05 that the number of non-standard items $X$ is distributed according to the Poisson law.
