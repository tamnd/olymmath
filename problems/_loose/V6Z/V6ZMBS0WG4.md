---
tag: V6ZMBS0WG4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2009070
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54380
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247880
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1993
    source: hf-ai-mo-aops
    label: 1993 Romania Team Selection Test
---
For each integer $n > 3$ find all quadruples $(n_1,n_2,n_3,n_4)$ of positive integers with $n_1 +n_2 +n_3 +n_4 = n$ which maximize the expression $$ \frac{n!}{n_1!n_2!n_3!n_4!}2^{ {n_1 \choose 2}+{n_2 \choose 2}+{n_3 \choose 2}+{n_4 \choose 2}+n_1n_2+n_2n_3+n_3n_4} $$
