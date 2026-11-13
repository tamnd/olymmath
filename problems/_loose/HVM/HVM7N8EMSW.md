---
tag: HVM7N8EMSW
kind: problem
type: answer
answer: (0,\frac{\sqrt{2}}{2})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142806
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence of positive integers $\left\{a_{n}\right\}: a_{1}=1, a_{2}=2, a_{n+2}=2 a_{n+1}+a_{n}$.
(1) Find all positive real numbers $\beta$ such that there exist infinitely many pairs of positive integers $(p, q)$ satisfying $\left|\frac{p}{q}-\sqrt{2}\right|<\frac{\beta}{q^{2}}$;
(2) Find all positive real numbers $\beta$ such that there are only finitely many pairs of positive integers $(p, q)$ satisfying $q \notin\left\{a_{n}\right\}$ and $\left|\frac{p}{q}-\sqrt{2}\right|<\frac{\beta}{q}$.
