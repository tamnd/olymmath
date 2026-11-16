---
tag: 9PZA4C8K6C
kind: problem
type: answer
answer: "2179"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=333
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
Kobar dan Borah bermain di papan tulis dengan aturan sebagai berikut: Diberikan dua buah bilangan asli berbeda di papan. Pada setiap langkah, dimulai dari Kobar, masing-masing pemain secara bergiliran mengubah bilangan di papan, dari P dan Q, menjadi 2P - Q dan 2Q - P atau dari P dan Q menjadi 5P - 4Q dan 5Q - 4P. Permainan berakhir saat ada pemain yang memunculkan bilangan tak positif. Pemain tersebut dinyatakan kalah, dan lawannya dinyatakan menang. Di awal permainan, bilangan yang tertulis di papan adalah 2024 dan A. Jika diketahui Kobar dapat melangsungkan langkah pertamanya, tentukan nilai A terbesar yang mungkin sehingga Borah dapat memenangkan permainan ini.
