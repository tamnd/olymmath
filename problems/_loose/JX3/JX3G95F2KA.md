---
tag: JX3G95F2KA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10926
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187329
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ibero-American_Mathematical_Olympiad/train/0000.parquet#row=90
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2002
    source: hf-numina-olympiads
    label: IberoAmerican_MO
  - at: ibero
    source: hf-mathnet
    label: Ibero-American Mathematical Olympiad Iberoamerican Mathematical Olympiad
---
The numbers $1,2, \ldots, 2002$ are written in order on a blackboard. Then the 1 st, 4 th, 7 th, $\ldots$, $3 \mathrm{k}+1$ th, $\ldots$ numbers in the list are erased. Then the 1 st, $4 \mathrm{th}, 7 \mathrm{th}, \ldots 3 \mathrm{k}+1$ th numbers in the remaining list are erased (leaving $3,5,8,9,12, \ldots$ ). This process is carried out repeatedly until there are no numbers left. What is the last number to be erased?
