---
tag: N1WKBFGPBP
kind: problem
type: answer
answer: "2021"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=1497
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
Diberikan barisan bilangan riil $\{a_{i,j}\}_{i=0,j=0}^{\infty,\infty}$ dengan $a_{i,0}=\frac{2021+3\cdot2^i}{2^i}$ untuk setiap bilangan bulat nonnegatif i serta untuk setiap bilangan bulat nonnegatif i dan j, berlaku persamaan $a_{i,j+1}=a_{i,j}^2-4a_{i,j}+6$. Apabila $A=\lim_{n \to \infty} a_{n,n}$, tentukan nilai dari $\lfloor \ln A \rfloor$.
