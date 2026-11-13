---
tag: RM0X5V6QJH
kind: problem
type: answer
answer: 1-\frac{1}{2010}<1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}(n \geqslant 0)$ satisfy $a_{1}=2$,
$$
a_{m+n}+a_{m \rightarrow n}-m+n=\frac{1}{2}\left(a_{2 m}+a_{2 n}\right) \text {, }
$$

where $m, n \in \mathbf{N}, m \geqslant n$.
(1) Prove: For all $n \in \mathbf{N}$, $a_{n+2}=2 a_{n+1}-a_{n}+2$;
(2) Prove: $\frac{1}{a_{1}}+\frac{1}{a_{2}}+\cdots+\frac{1}{a_{2009}}<1$.
