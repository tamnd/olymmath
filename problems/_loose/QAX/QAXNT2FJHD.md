---
tag: QAXNT2FJHD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250988
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions
---
Let $f_n = 2^{2^n}+ 1$, $n = 1,2,3,...$, be the Fermat's numbers. Find the least real number $C$ such that $$\frac{1}{f_1}+\frac{2}{f_2}+\frac{2^2}{f_3}+...+\frac{2^{n-1}}{f_n} <C$$
for all positive integers $n$
