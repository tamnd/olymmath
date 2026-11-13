---
tag: R12ZNNKSN0
kind: problem
type: answer
answer: u_{n}=\frac{1+\frac{1}{2}(n-4)(-1)^{n}}{2n+1+(-1)^{n-1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182016
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The number sequences $\left(s_{n}\right)=\frac{1}{1} ; \frac{1}{2} ; \frac{1}{3} ; \frac{1}{4} ; \frac{1}{5} ; \ldots$ and $\left(t_{n}\right)=\frac{0}{1} ; \frac{1}{2} ; \frac{2}{3} ; \frac{3}{4} ; \frac{4}{5} ; \ldots$ have the formation rules $s_{n}=\frac{1}{n}$ and $t_{n}=\frac{n-1}{n}$.

What is the formation rule for the combined sequence

$$
\left(u_{n}\right)=\frac{1}{1} ; \frac{0}{1} ; \frac{1}{2} ; \frac{1}{2} ; \frac{1}{3} ; \frac{2}{3} ; \frac{1}{4} ; \frac{3}{4} ; \frac{1}{5} ; \frac{4}{5} ; \frac{1}{6} ; \frac{5}{6} ; \ldots
$$

Note: Often it is stated: It is $u_{2 n}=t_{n}$ and $u_{2 n-1}=s_{n}$. This is not the desired solution. Rather, a unified formation rule $u_{n}$ is sought, which for $n=1 ; 2 ; 3 ; \ldots$ yields the terms of the combined sequence.
