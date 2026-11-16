---
tag: VAANCKYBMT
kind: problem
type: answer
answer: A(b, c, c), B(d, d, d), C(a, b, a), D(a, a, b)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=743
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-omvn/2016
    source: hf-indonesian-olympiad
    label: OMVN_SMA_2016
---
Empat orang A, B, C, dan D memainkan 4 kartu masing-masing bertuliskan satu bilangan bulat positif berbeda a, b, c, d dimana a < b < c < d dan c - b = 1. Dalam satu permainan, kartu dikocok dan dibagikan ke setiap pemain, kemudian pemain mencatat setiap bilangan yang tertera pada kartu yang didapat. Permainan dimainkan sebanyak lebih dari 2 kali. Setelah beberapa kali bermain, jumlah bilangan yang didapat pemain A dan D adalah 8, jumlah bilangan yang didapat pemain B adalah 15, dan jumlah bilangan yang didapat pemain C adalah 5. Pemain D mendapatkan kartu dengan bilangan tertinggi di permainan pertama, sedangkan pemain C selalu mendapat kartu dengan bilangan a atau b. Tuliskan kartu-kartu yang didapat oleh tiap pemain di setiap permainan!
