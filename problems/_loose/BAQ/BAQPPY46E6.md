---
tag: BAQPPY46E6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85521
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nl-nwo
    source: hf-mathnet
    label: Netherlands Dutch Mathematical Olympiad
---
Let $n$ be a positive integer. A grasshopper stands on the number line at the number 1 and may either make a jump of length 2 or of length 3. The grasshopper must always land on an integer between 1 and $n$ that the grasshopper has not visited before. The grasshopper wants to visit all integers from 1 to $n$ exactly once and end on the number $n$.

Prove that this is possible for all $n \geqslant 9$.
