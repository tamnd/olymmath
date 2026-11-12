---
tag: TFNPZS7SB6
kind: problem
type: answer
answer: \eta_{y/x}=0,\eta_{x/y}=0.935,\rho_{y/x}=\rho_{x/y}=0,r(X,Y)=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30699
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The distribution of features $X$ and $Y$ is presented in the following correlation table:

| | | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | $m_{x}$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| -2 | | | | 1 | 2 | 1 | | | | 4 | |
| -1 | | | 1 | 3 | | 3 | 1 | | | 8 | |
| 0 | | 2 | 4 | | | | 4 | 2 | | 12 | |
| 1 | 1 | 5 | | | | | | 5 | 1 | 12 | |
| 2 | 3 | | | | | | | | | | |

Find the correlation ratios $\eta_{y / x}$ and $\eta_{x / y}$ and compare them with the corresponding linear correlation coefficient.
