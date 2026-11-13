---
tag: DVGD6J79DE
kind: problem
type: answer
answer: a_{n}={\begin{pmatrix}1,&n=1\\\prod_{k=1}^{n-1}[(4^{k-1}-1)^{2}-1],&n\geqslant2\end{pmatrix}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114482
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the positive sequence $\left\{a_{n}\right\}$ satisfies $\sqrt{a_{n} a_{n+1}+a_{n} a_{n+2}}=4 \sqrt{a_{n} a_{n+1}+a_{n+1}^{2}}+$
$3 \sqrt{a_{n} a_{n+1}}$ and $a_{1}=1, a_{2}=8$, find the general term formula of $\left\{a_{n}\right\}$.
