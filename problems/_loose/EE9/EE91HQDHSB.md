---
tag: EE91HQDHSB
kind: problem
type: answer
answer: "7728"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=606
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
Sebuah kode terdiri dari angka 0,1,2,3,atau 4. Kode tersebut memuat setidaknya 3 angka bukan 0. Selain angka 0, tiap angka boleh digunakan maksimal sekali. Antarangka tidak 0 tidak boleh berdekatan (misal 1 dan 4). Banyaknya angka 0 tidak boleh lebih dari $\frac{2}{3}$ panjang kode. Banyak kode yang dapat dibuat dengan syarat tersebut adalah ... Contoh kode yang diperbolehkan : 10300204 Contoh kode yang tidak diperbolehkan : 20001000000
