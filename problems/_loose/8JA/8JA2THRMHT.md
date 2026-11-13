---
tag: 8JA2THRMHT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130681
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Place a strictly increasing sequence of $n$ numbers in the first row, and after making some adjustments to the positions of these $n$ numbers, place them in the second row. Then add the corresponding elements of these two rows, and place the new sequence obtained in the third row. It is known that the $n$ numbers in the third row are still strictly increasing. Prove that the first row and the second row are the same.
