---
tag: GT6RBZN6A7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the polynomial $f(x)=a_{0} x^{n}+a_{1} x^{n-1}+\cdots+a_{n-1} x+a_{n} \in Z[x]$, and it satisfies the conditions:
(1) $0<a_{0}<a_{1}<\cdots<a_{n-1}<a_{n}$;
(2) $a_{n}=p^{m}$, where $p$ is a prime number ($m$ is a positive integer), and $p \times a_{n-1}$.
Prove: $f(x)$ is irreducible in $Z[x]$.
