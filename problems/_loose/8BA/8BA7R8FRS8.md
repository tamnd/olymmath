---
tag: 8BA7R8FRS8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231896
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of positive real numbers $a_1, a_2, \dots$ is called $\textit{phine}$ if it satisfies
$$a_{n+2}=\frac{a_{n+1}+a_{n-1}}{a_n},$$
for all $n\geq2$. Is there a $\textit{phine}$ sequence such that, for every real number $r$, there is some $n$ for which $a_n>r$?
