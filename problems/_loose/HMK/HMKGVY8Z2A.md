---
tag: HMKGVY8Z2A
kind: problem
type: answer
answer: Both dimensions are even.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $n$ 與 $m$ 為正整數。托兒所的老師用 $n \times m$ 塊正方形巧拼，排成一個 $n \times m$ 的長方形區域。每塊巧拼上有一個嬰兒，各自面向正方形的某一個邊。老師一拍手，所有嬰兒就同時往其面對的方向前進一塊巧拼，之後所有嬰兒原地順時鐘轉 90 度。若一個嬰兒爬出 $n \times m$ 的長方形區域，則該嬰兒大哭。若兩個嬰兒前進到相同的巧拼上，他們會對撞然後一起大哭。
已知老師可以適當安排一開始每個嬰兒的面向，使得不論老師拍多少次手，都沒有嬰兒大哭。
試求 $n$ 與 $m$ 的所有可能值。
