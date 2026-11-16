---
tag: CAD5CJDDK7
kind: problem
type: answer
answer: (n-1)!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=335
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2024
    source: hf-indonesian-olympiad
    label: osn_sma_2024
---
Diberikan sebuah bilangan asli n ≥ 2. Misal a1, a2, ..., an merupakan bilangan bulat yang semuanya berbeda. Untuk k = 1, 2, ..., n misalkan s_k = Π_{i≠k, 1≤i≤n} |a_k - a_i|, yakni s_k adalah hasil kali semua bentuk |a_k - a_i| dengan i ∈ {1, 2, ..., n} dan i ≠ k. Tentukan bilangan asli M terbesar sehingga M habis membagi kelipatan persekutuan terkecil dari s1, s2, ..., sn untuk setiap kemungkinan a1, a2, ..., an.
