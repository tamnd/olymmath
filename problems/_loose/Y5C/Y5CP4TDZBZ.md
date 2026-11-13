---
tag: Y5CP4TDZBZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187968
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=39
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 60th Belarusian Mathematical Olympiad
---
Prove that

$$
\frac{a^{3}(a+c)(a+b)}{(a-c)(a-b)}+\frac{b^{3}(b+a)(b+c)}{(b-a)(b-c)}+\frac{c^{3}(c+a)(c+b)}{(c-a)(c-b)}=a b c
$$

if $a \neq b \neq c \neq a$ and $a+b+c=0$.
