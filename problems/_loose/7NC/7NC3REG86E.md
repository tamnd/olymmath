---
tag: 7NC3REG86E
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{0}>0$ and
$$
a_{n+1}=\frac{a_{n}^{2}-1}{n+1}, n \geqslant 0 .
$$

Prove that there exists a real number $a>0$, such that
(i) if $a_{0} \geqslant a$, then as $n \rightarrow+\infty$, $a_{n} \rightarrow+\infty$.
(ii) if $a_{0}<a$, then as $n \rightarrow+\infty$, $a_{n} \rightarrow 0$.
