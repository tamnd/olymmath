---
tag: 8F6XQWJWRV
kind: problem
type: answer
answer: n = 2025
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=330
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2022
    source: hf-indonesian-olympiad
    label: osn_sma_2022
---
Misalkan A adalah suatu barisan bilangan nol dan satu. Operasi yang diizinkan adalah: kita boleh memilih suatu blok / sub-barisan bersambung (contiguous subsequence) di mana terdapat nol dan satu yang tidak sama banyaknya, dan membalik blok tersebut. Contoh: jika A = 1100 maka kita boleh memilih blok 100 dan membaliknya, sehinga sekarang A = 1001. Namun kita tidak boleh memilih blok 1100 dan membaliknya karena mengandung 1 dan 0 sama banyak. Tentukan n terbesar sehingga terdapat A1, A2, ..., An di mana setiap Ai memiliki panjang 2022 bilangan, dan untuk i != j, Ai tidak dapat diubah menjadi Aj melalui serangkaian operasi.
