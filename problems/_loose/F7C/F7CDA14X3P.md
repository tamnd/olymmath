---
tag: F7CDA14X3P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90734
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Martha is a chicken who lives in a coop whose finitely many residents have a definite "pecking order": for every pair of distinct chickens, exactly one pecks the other. (However, it is not necessarily true that if $X$ pecks $Y$ and $Y$ pecks $Z$, then $X$ pecks $Z$.) A chicken $X$ is called a "leader" of the coop if every other chicken is pecked by $X$ or pecked by a chicken who is pecked by $X$. Prove that if no one in the coop pecks more chickens than Martha, then Martha is a leader.
