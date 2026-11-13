---
tag: 9CWJN7DDJS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250654
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=417
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $ABC$ be an acute triangle with $AT, AS$ respectively are the internal, external angle bisector of $ABC$ and $T, S \in BC$. On the circle with diameter $TS$, take an arbitrary point $P$ that lies inside the triangle ABC. Denote $D, E, F, I$ as the incenter of triangle $PBC, PCA, PAB, ABC$. Prove that four lines $AD, BE, CF$ and $IP$ are concurrent.
