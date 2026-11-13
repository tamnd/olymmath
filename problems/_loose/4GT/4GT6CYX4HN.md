---
tag: 4GT6CYX4HN
kind: problem
type: answer
answer: a_{n}={\begin{pmatrix}n,&1\leqslantn\leqslant2012,\\2012(-1)^{n},&n\geqslant2013\end{pmatrix}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122193
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=60
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league
    source: hf-mathnet
    label: China China Mathematical Competition
---
Given a sequence $\left\{a_{n}\right\}$ whose terms are all non-zero real numbers, and for any positive integer $n$, we have
$$
\left(a_{1}+a_{2}+\cdots+a_{n}\right)^{2}=a_{1}^{3}+a_{2}^{3}+\cdots+a_{n}^{3} .
$$
(1) When $n=3$, find all sequences of three terms $a_{1} 、 a_{2} 、 a_{3}$ that satisfy the condition;
(2) Does there exist an infinite sequence $\left\{a_{n}\right\}$ that satisfies the condition and has $a_{2013}=-2012$? If it exists, find a general term formula for such an infinite sequence; if not, explain the reason.
