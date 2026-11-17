---
tag: 7M2FY5ZHW0
kind: problem
type: answer
answer: k = 99
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=1572
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-soc/2022
    source: hf-indonesian-olympiad
    label: SOC_2022
---
Definisikan S(n) sebagai hasil penjumlahan digit-digit n. Sebagai contoh, S(1202)=1+2+0+2=5 dan S(123454321)=25. Carilah bilangan bulat positif terkecil k yang memenuhi persamaan S(k)=S(2k)=S(3k)=S(4k)=S(5k)=...=S(21k)=S(22k).
