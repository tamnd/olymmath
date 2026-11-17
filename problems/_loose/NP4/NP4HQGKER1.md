---
tag: NP4HQGKER1
kind: problem
type: answer
answer: 7, 11, 49, 77, 539
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=750
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
Suatu bilangan 4-digit dengan semua digitnya adalah genap dikatakan gold jika tidak ada digit yang berulang lebih dari 2 kali. Untuk setiap bilangan asli n > 1, dₙ menyatakan banyak cara untuk melengkapi tabel dengan n baris dan 4 kolom yang entri-entrinya adalah digit genap (0 sampai 8) sehingga: a. Bilangan 4-digit pada setiap baris adalah bilangan gold. b. Bilangan gold 2020 hanya muncul pada salah satu baris dari tabel tersebut Tentukan semua bilangan asli n sehingga d_{n+1}/dₙ merupakan bilangan bulat.
