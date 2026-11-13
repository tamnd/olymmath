---
tag: GRE03FHKC8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182406
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove by complete induction that

$$
\sum_{i=0}^{10^{n}-1} 2^{Q(i)}=1023^{n}
$$

holds for every natural number $n$, where $Q(i)$ denotes the sum of the digits of the number $i$.
