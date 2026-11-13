---
tag: HCAJFKHNW9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160985
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given natural number $n \geqslant 2$, let $C(n)$ be the smallest positive real constant for which there exist $n$ real numbers $x_{1}, x_{2}, \ldots, x_{n}$, not all zero, satisfying the conditions:

(i) $x_{1}+x_{2}+\cdots+x_{n}=0$;

(ii) for every $i=1,2, \ldots, n$, $x_{i} \leqslant x_{i+1}$ or $x_{i} \leqslant x_{i+1}+C(n) x_{i+2}$ (where indices are taken modulo $n$).

Prove:

(a) $C(n) \geqslant 2$ for all $n$;

(b) $C(n)=2$ if and only if $n$ is an even number. (Dušan Đukić)
