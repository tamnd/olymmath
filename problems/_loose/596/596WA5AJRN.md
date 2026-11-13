---
tag: 596WA5AJRN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182802
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From a triple $\left(a_{0} ; b_{0} ; c_{0}\right)$ of positive real numbers $a_{0} ; b_{0} ; c_{0}$, we form a sequence of triples $\left(a_{k} ; b_{k} ; c_{k}\right)$ according to the formation rule

$$
a_{k}=a_{k-1} b_{k-1} ; b_{k}=b_{k-1} c_{k-1} ; c_{k}=c_{k-1} a_{k-1}
$$

Prove: If the sequence of triples is periodic, then a period contains at most 6 different triples.
