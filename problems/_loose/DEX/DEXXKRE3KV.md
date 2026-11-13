---
tag: DEXXKRE3KV
kind: problem
type: answer
answer: 1006!/503!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=38
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
設 $S = \{1, 2, \dots, 2012\}$。求滿足下列條件之函數 $f : S \to S$ 的個數。

(1) $f$ 為一對一且映成函數。

(2) 對於所有數字 $1 \le a \le 2012$，皆會有 $f(a) + f^{-1}(a) = 2013$，其中 $f^{-1}$ 為 $f$ 的反函數。
