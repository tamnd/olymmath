---
tag: 8S5TKC2AYN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=99
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
有若干個正整數排成一列。某人每次選擇兩個相鄰的數字 $x$ 與 $y$, 其中 $x > y$, 並且 $x$ 在 $y$ 的左邊; 接著他把這個數對 $(x, y)$ 用 $(y + 1, x)$ 或 $(x - 1, x)$ 取代。然後他重複作這樣的選擇與取代的操作。試證他只能作有限次這樣的操作。
