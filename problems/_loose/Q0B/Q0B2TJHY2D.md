---
tag: Q0B2TJHY2D
kind: problem
type: answer
answer: m = 1 if n ≠ 2k, and m = 2 if n = 2k.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=218
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $n, k$ 為正整數且 $n > k$。有甲、乙兩人:
1. 甲先私自在紙條上寫下一個 $n$ 位數的 01 序列, 並在黑板上寫下所有跟這個 01 序列恰有 $k$ 個位數不同的所有長度為 $n$ 的 01 序列。舉例來說, 如果 $n=3, k=1$, 且紙條上的 01 序列 101, 則甲必須在黑板上寫下 001, 111 和 100.
2. 接著, 乙看著黑板上的所有序列, 試圖猜測紙條上的序列是什麼。他每次可以猜一個 $n$ 位數的 01 序列, 而甲必須誠實回答他是否猜對了。
對於每組 $(n, k)$, 試求最小的正整數 $m$, 使得乙存在一個猜測策略, 能保證在 $m$ 次猜測內猜到正解。
