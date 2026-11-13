---
tag: N0GNE8KXV0
kind: problem
type: answer
answer: "1343"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124395
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=1, a_{2}=2$, for each positive integer $n \geqslant 3$, we have
$$
a_{n}=2 a_{n-1} \text { or } a_{n}=a_{n-1}+a_{n-2} \text {. }
$$

For example, this sequence can be $1,2,4,6,10, \cdots$.
(1) If a term $a_{m}(m \geqslant 4)$ is odd and not a multiple of 3, prove: $a_{m}=2 a_{m-2}+a_{m-3}$;
(2) Prove: $\sum_{n=1}^{2013} \frac{a_{n}}{a_{n+1} a_{n+2}}<\frac{1}{2}$;
(3) If in the first 2015 terms of $\left\{a_{n}\right\}$, there are exactly $t$ odd terms, find the maximum value of $t$.
