---
tag: Q8NEHVAWVB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221955
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabian Mathematical Competitions
---
Let $ABCD$ be a rectangle with $P$ lies on the segment $AC$. Denote $Q$ as a point on minor arc $PB$ of $(PAB)$ such that $QB = QC$. Denote $R$ as a point on minor arc $PD$ of $(PAD)$ such that $RC = RD$. The lines $CB$, $CD$ meet $(CQR)$ again at $M, N$ respectively. Prove that $BM = DN$.

by Tran Quang Hung
