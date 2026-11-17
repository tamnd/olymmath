---
tag: 36TNM87ZCM
kind: problem
type: answer
answer: $2^{1-2^{-31}} + \sqrt{2^{2-2^{-30}}-1}$
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-lmnas/2021
    source: hf-indonesian-olympiad
    label: LMNas_SMP_2021
---
Diberikan barisan bilangan real positif $\{a_n\}$ dengan $a_1=1$ dan untuk setiap bilangan asli $n$, berlaku $a_{n+1} = \frac{\sqrt{a_{n+1}^2+1} + \sqrt{a_n^{2}-a_n+1}}{\sqrt{a_n}}$. Nilai $a_{32}$ adalah ... (Ada kemungkinan salah ketik pada rumus rekursif di soal aslinya, karena $a_{n+1}$ muncul di kedua sisi. Diasumsikan rumus yang dimaksud adalah untuk mencari $a_{n+1}$ dari $a_n$.)
