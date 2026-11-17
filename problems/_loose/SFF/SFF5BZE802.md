---
tag: SFF5BZE802
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
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=523
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
Pasangan bilangan asli $(x,y)$ dikatakan lucu apabila memenuhi persamaan $\frac{1}{x} + \frac{1}{y} = \frac{FPB(x,y-1)}{\sqrt{x+y-1}}$. Banyaknya pasangan lucu $(x,y)$ yang memenuhi $|x-y| \le 2022$ adalah ...
