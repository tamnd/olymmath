---
tag: FMM0JG5JN9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140683
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence $\left\{a_{n}\right\}$ with all terms positive, and for any positive integer $n$, we have
$$
\sum_{k=1}^{n}\left(a_{n}^{2}+2 a_{n}\right)=\frac{n}{n+1} .
$$

Let $b_{n}=\frac{a_{n}}{1-\sqrt{2 n(n+1) a_{n}}}$. Prove:
(1) For any positive integer $n$, we have $b_{n}>4$;
(2) There exists a positive integer $m$, such that when $n>m$, we always have
$$
\sum_{k=1}^{n} \frac{a_{n+1}}{a_{n}}<n-2021 .
$$
