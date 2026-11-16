---
tag: 6W4M9FKPSB
kind: problem
type: answer
answer: "1683"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=1490
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-opsilon/2019
    source: hf-indonesian-olympiad
    label: OPSILON_SMA_2019
---
Diberikan barisan bilangan riil $\{a_{i,j}\}_{i=0,j=0}^{\infty,\infty}$ dengan $a_{0,0}=a_{i,0}=a_{0,j}=1$ untuk setiap bilangan asli i dan j serta untuk setiap bilangan asli i dan j, berlaku persamaan $a_{i,j}=a_{i-1,j}+a_{i,j-1}+a_{i-1,j-1}$. Tentukan nilai dari $a_{5,5}$.
