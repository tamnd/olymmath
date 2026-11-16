---
tag: CVE1ETV0H0
kind: problem
type: answer
answer: "31"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=1039
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-sce/2018
    source: hf-indonesian-olympiad
    label: SCE_SMA_2018
---
Banyak bilangan bulat $b > 1$ sedemikian rupa sehingga untuk setiap bilangan bulat $n$ berlaku $n^{25} - n$ habis dibagi oleh $b$ adalah
