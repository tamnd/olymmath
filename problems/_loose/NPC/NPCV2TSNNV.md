---
tag: NPCV2TSNNV
kind: problem
type: answer
answer: ⌊(N − 1) / s⌋
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $N$ 與 $s$ 為正整數, 且 $N > s$。台電園區裡有若干棟建物, 其中恰有 $N$ 棟為發電廠, 另有一棟為總部。若干對建物之間有僅能單向送電的電線, 滿足:

(i) 所有連接發電廠的電線都只會把電送出發電廠。

(ii) 對於每個非總部的建物, 都存在唯一的一系列電線, 構成從該建物通向總部的電路。

某建物被稱為 $s$ 級有電, 若且唯若當我們移除園區內的任何一條電線, 該建物仍能從至少 $s$ 個電廠供電。試求 $s$ 級有電建物數量的最大可能值。
