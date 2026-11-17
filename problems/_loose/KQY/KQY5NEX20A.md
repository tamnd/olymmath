---
tag: KQY5NEX20A
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=477
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-lmnas/2021
    source: hf-indonesian-olympiad
    label: LMNas_SMA_2021
---
Diberikan barisan $(a_n)$ yang memenuhi $a_{n+1} = \frac{a_n a_{n-1}}{\sqrt{4(a_{n-1})^2 - 4(a_n)^2}}$. Jika $a_1 = \frac{1}{\sqrt{2}}$ dan $a_2 = \frac{1}{2}$, nilai dari $2^{2526} \prod_{n=1}^{100} a_n$ adalah ...
