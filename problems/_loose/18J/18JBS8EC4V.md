---
tag: 18JBS8EC4V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126870
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a non-constant real-coefficient polynomial $P(x)$ whose all roots are real. If there exists a real-coefficient polynomial $Q(x)$ such that for all real numbers $x$, we have
$$
P^{2}(x)=P(Q(x)),
$$

prove: all roots of $P(x)$ are equal.
