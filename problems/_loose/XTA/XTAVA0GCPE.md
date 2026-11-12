---
tag: XTAVA0GCPE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38632
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$N$ soldiers are lined up in a single row (shoulder to shoulder). On the command "left," all turn $90^{\circ}$ simultaneously, but some turn left while others turn right. Exactly one second later, each soldier who is now face to face with a neighbor turns around - by $180^{\circ}$. Another second later, each soldier who is now face to face with a neighbor turns around by $180^{\circ}$, and so on.

a) Prove that each soldier will turn around no more than $N-1$ times.

b) Prove that the movement in the formation cannot continue for more than $N-1$ seconds.
