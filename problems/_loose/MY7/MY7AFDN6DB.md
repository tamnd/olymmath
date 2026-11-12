---
tag: MY7AFDN6DB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Jury, SRP, 77). Let $A=\left(a_{1} ; \ldots ; a_{m}\right)$ be a set of $m=2^{n}(n \in \mathbf{N})$ numbers $a_{i} \in\{1 ;-1\}, i=1,2, \ldots, m$. The operation $S$ is defined by the formula

$$
S(A)=\left(a_{1} a_{2} ; a_{2} a_{3} ; \ldots ; a_{m} a_{1}\right)
$$

Prove that for any set $A$ in the sequence $A, S(A), S(S(A)), \ldots$ there is a set of $m$ ones.
