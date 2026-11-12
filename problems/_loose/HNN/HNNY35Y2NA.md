---
tag: HNNY35Y2NA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32496
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n=100$ experiments were conducted. Each experiment consisted of $N=10$ trials, in each of which the probability $p$ of event $A$ occurring was 0.3. As a result, the following empirical distribution was obtained (in the first row, the number $x_{i}$ of occurrences of event $A$ in one experiment is indicated; in the second row - the frequency $n_{i}$, i.e., the number of experiments in which $x_{i}$ occurrences of event $A$ were observed):

| $x_{i}$ | 0 | 1 | 2 | 3 | 4 | 5 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $n_{i}$ | 2 | 10 | 27 | 32 | 23 | 6 |

It is required to test the hypothesis at a significance level of 0.05 that the discrete random variable $X$ (the number of occurrences of event $A$) is distributed according to the binomial law.
