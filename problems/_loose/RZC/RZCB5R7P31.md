---
tag: RZCB5R7P31
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the infinite sequence $\left\{a_{n}\right\}$ satisfy $a_{1}=1, a_{n}=a_{n-1}+\frac{1}{a_{n-1}}(n \geqslant 2)$. Prove:
(1) When $n \geqslant 2$, $a_{n} \geqslant \sqrt{2 n}$;
(2) There does not exist a real number $C$ such that $a_{n}<\sqrt{2 n+C}$ for all $n$.
