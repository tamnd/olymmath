---
tag: QTTWN8TY3T
kind: problem
type: answer
answer: (0,\cdots,0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define $f(x)=f\left(x ; a_{0}, \cdots, a_{2021}, b_{1}, \cdots, b_{2021}\right)=a_{0}+\sum_{k=1}^{2021}\left(a_{k} \cos 2 k \pi+b_{k} \sin 2 k \pi\right)$ where $a_{k}, b_{k} \in \mathbb{R}$, and $f(x)$ satisfies the properties:
(1) $f(x)+f\left(x+\frac{1}{2}\right)=f(2 x)(\forall x \in \mathbb{R})$,
(2) If $f\left(x ; a_{0}, \cdots, a_{2021}, b_{1}, \cdots, b_{2021}\right)=f\left(x ; a_{0}^{\prime}, \cdots, a_{2021}^{\prime}, b_{1}^{\prime}, \cdots, b_{2021}^{\prime}\right)(\forall x \in \mathbb{R})$,
then $\left(a_{0}, \cdots, a_{2021}, b_{1}, \cdots, b_{2021}\right)=\left(a_{0}^{\prime}, \cdots, a_{2021}^{\prime}, b_{1}^{\prime}, \cdots, b_{2021}^{\prime}\right)$

Find all arrays $\left(a_{0}, \cdots, a_{2021}, b_{1}, \cdots, b_{2021}\right)$ that satisfy the conditions.
