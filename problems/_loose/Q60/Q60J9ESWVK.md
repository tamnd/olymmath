---
tag: Q60J9ESWVK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Hong Kong Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2946152
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=740
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204393
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2023
    source: hf-ai-mo-aops
    label: 2023 Hong Kong Team Selection Test
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Given a $24 \times 24$ square grid, initially all its unit squares are coloured white. A move consists of choosing a row, or a column, and changing the colours of all its unit squares, from white to black, and from black to white. Is it possible that after finitely many moves, the square grid contains exactly $574$ black unit squares?
