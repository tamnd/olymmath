---
tag: HN4W2EVABV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let real numbers $a_{1} \leqslant a_{2} \leqslant \ldots \leqslant a_{n}$ and $b_{1} \leqslant b_{2} \leqslant \ldots \leqslant b_{n}$ be given such that for every $x \in \mathbb{R}$, the following holds:

$$
\left|x-b_{1}\right|+\left|x-b_{2}\right|+\cdots+\left|x-b_{n}\right| \leqslant\left|x-a_{1}\right|+\left|x-a_{2}\right|+\cdots+\left|x-a_{n}\right| \text {. }
$$

Prove:

$$
a_{1}+a_{2}+\cdots+a_{n}=b_{1}+b_{2}+\cdots+b_{n}
$$

and, for every $k, 1 \leqslant k \leqslant n-1$ :

$$
a_{1}+a_{2}+\cdots+a_{k} \leqslant b_{1}+b_{2}+\cdots+b_{k}
$$
