---
tag: CXYW8M4BNG
kind: problem
type: answer
answer: "52"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=511
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-lmnas/2022
    source: hf-indonesian-olympiad
    label: LMNas_SMA_2022
---
Diberikan barisan $\{S_n\}$ untuk setiap $n=0,1,2,3,\dots$ dengan definisi sebagai berikut: $S_n = \begin{cases} 2 & \text{untuk } n=0 \\ 1 & \text{untuk } n=1 \\ S_{n-1}+S_{n-2} & \text{untuk } n \text{ lainnya} \end{cases}$. Dua digit terakhir dari $2022^{2022}S_{2022}$ adalah ...
