---
tag: 2BCYSKN2XD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76058
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=38
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 62nd Czech and Slovak Mathematical Olympiad
---
Prove that positive numbers $a, b, c$ are the lengths of the sides of a triangle if and only if the system of equations

$$
a(y z+x)=b(z x+y)=c(x y+z), x+y+z=1
$$

with unknowns $x, y, z$ has a solution in the set of positive real numbers.
