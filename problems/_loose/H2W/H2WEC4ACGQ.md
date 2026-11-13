---
tag: H2WEC4ACGQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A triple $(a,b,c)$ of positive integers is called **strong** if the following holds: for each integer $m>1$, the number $a+b+c$ does not divide $a^m+b^m+c^m$. The **sum** of a strong triple $(a,b,c)$ is defined as $a+b+c$.

Prove that there exists an infinite collection of strong triples, the sums of which are all pairwise coprime.
