---
tag: JV99BXEN9F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77069
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=43
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
Let $A B C D$ be a parallelogram such that the projections $K, L$ of $D$ onto the sides $A B, B C$, respectively, are their interior points. Prove that $K L \| A C$ if and only if

$$
\angle B C A+\angle A B D=\angle B D A+\angle A C D .
$$

(Ján Mazák)
