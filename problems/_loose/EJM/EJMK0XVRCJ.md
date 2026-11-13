---
tag: EJMK0XVRCJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the integer sequence $\left\{a_{n}\right\}(n \geqslant 1)$ satisfies $a_{1}=1$, $a_{2}=2$, and for any positive integer $n$, we have
$$
a_{n+2}=a_{n+1}^{2}+(n+2) a_{n+1}-a_{n}^{2}-n a_{n} \text {. }
$$
(1) Prove: There exist infinitely many prime numbers that divide at least one term in the sequence $\left\{a_{n}\right\}$;
(2) Find three different prime numbers that do not divide any term in the sequence $\left\{a_{n}\right\}$.
