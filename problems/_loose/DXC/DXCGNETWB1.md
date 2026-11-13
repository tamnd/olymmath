---
tag: DXCGNETWB1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=20
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2011
    source: hf-mathnet
    label: Balkan Mathematical Olympiad shortlistBMO 2011
---
Is it possible to partition the set of positive integer numbers into two classes, none of which contains an infinite arithmetic sequence (with a positive ratio)?
What if we require the extra condition that, in each class $C$ of the partition, the set of differences
$$
\{ \min \{ n : n \in C \text{ and } n > m \} - m : m \in C \}
$$
be bounded?
