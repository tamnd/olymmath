---
tag: 9KAXZXBSQG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143877
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $d$, prove: there exists a unique real-coefficient polynomial $p(x)$ satisfying
(1) The degree of $p(x)$ is $d$, the leading coefficient is 1, and $p(1) \neq 0$;
(2) If a real number sequence $\left\{a_{n}\right\}$ satisfies for all integers $n>1$, $\sum_{k=1}^{n} p(n+1-k) a_{k}=0$, then there exists a positive integer $f\left(\left\{a_{n}\right\}\right)=f$, such that when $n \geqslant f$, $a_{n}=0$.
