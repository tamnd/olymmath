---
tag: DG412FN6SP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Inside triangle $A B C$, there is a point $P$ such that

$$
\angle A B P = \angle P C A = \frac{1}{3}(\angle A B C + \angle B C A).
$$

Prove that $\frac{|A B|}{|A C| + |P B|} = \frac{|A C|}{|A B| + |P C|}$.
