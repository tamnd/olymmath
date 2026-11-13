---
tag: 2AKKQR070A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a circle, Anna drew 2019 chords, with all endpoints being distinct. A point is called a "marked point" if and only if it satisfies one of the following two conditions:
(1) It is one of the 4038 endpoints of the chords;
(2) It is the intersection of at least two chords.
Anna assigns a value to each marked point. For the 4038 points satisfying condition (1), Anna assigns 0 to 2019 of them and 1 to the other 2019 points; for points satisfying condition (2), Anna assigns an arbitrary integer (not necessarily positive). On each chord, Anna considers the segments formed by two adjacent marked points (on a chord containing $k$ marked points, there are $k-1$ such segments). She writes the sum of the numbers at the endpoints of each segment in yellow and the absolute difference of the numbers at the endpoints in blue. Anna finds that $N+1$ yellow numbers are exactly 0, 1, ..., N (each appearing once). Prove: At least one blue number is a multiple of 3.
