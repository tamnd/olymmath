---
tag: Q5PTVZTT00
kind: problem
type: answer
answer: "44"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=531
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
Banyaknya kuadrupel bilangan bulat $(A,B,C,D)$ sedemikian sehingga terdapat fungsi $f: \mathbb{Z} \to \mathbb{Q}$ yang memenuhi • $f(n^{2}-2n-1) = A \cdot 2^n + B \cdot 2^{-n}$ untuk setiap $n \in \mathbb{Z}$, • $f(n^{2}-4n+1) = |n-C| + |n-D|$ untuk setiap $n \in \mathbb{Z}$, dan • $f(2022)=90$ adalah ...
