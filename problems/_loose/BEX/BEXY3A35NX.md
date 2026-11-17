---
tag: BEXY3A35NX
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
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=1477
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
Diberikan barisan bilangan riil $\{a_n\}_{n=0}^\infty$ dengan $a_0=1, a_1=\frac{1}{2}$, serta untuk setiap bilangan asli $n \ge 2$, berlaku persamaan $a_n = \frac{a_{n-1}a_{n-2}}{a_{n-1}a_{n-2}-a_{n-1}+2a_{n-2}}$. Apabila nilai dari $a_{2021}$ dapat dinyatakan dalam bentuk $\frac{1}{k}$, dengan k adalah bilangan asli, tentukan nilai dari $\lfloor \sqrt{2k} \rfloor$.
