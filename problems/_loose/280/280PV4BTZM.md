---
tag: 280PV4BTZM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178501
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 67th Romanian Mathematical Olympiad
---
If $A$ and $B$ are non-zero natural numbers, then we denote by $\overline{A B}$ the number obtained by writing, in order, the digits of $B$ after the digits of $A$. For example, if $A=193$ and $B=2016$, then $\overline{A B}=1932016$. Show that there are infinitely many perfect squares of the form $\overline{A B}$ in each of the following situations:

a) the numbers $A$ and $B$ are perfect squares;

b) the numbers $A$ and $B$ are perfect cubes;

c) the number $A$ is a perfect cube, and the number $B$ is a perfect square;

d) the number $A$ is a perfect square, and the number $B$ is a perfect cube.
