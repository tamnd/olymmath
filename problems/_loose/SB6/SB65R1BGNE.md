---
tag: SB65R1BGNE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=70
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $n$ 為正整數並給定無限長的週期字串 $W = \dots x_{-1}x_0x_1x_2\dots$, 其中 $x_i$ 可以是字母 $a$ 或 $b$ 對所有整數 $i$, 而 $W$ 的最小週期 $p$ 是大於 $2^n$ (即 $x_i = x_{i+p}$ 對於所有 $i$, 而這樣的 $p$ 不可能再小了)。我們稱一個長度 $\le p$ 的非空的子字串 $U$ 是左右逢源的 (左右逢源以 FU 當作縮寫), 如果 $aU, bU, Ua$ 與 $Ub$ 這四種字串都出現在 $W$ 中。試證明: $W$ 至少包含 $n$ 個 FU 子字串。
