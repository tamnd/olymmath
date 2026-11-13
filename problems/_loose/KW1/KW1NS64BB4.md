---
tag: KW1NS64BB4
kind: problem
type: answer
answer: 3m/2 - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=36
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
有一個 $m \times m$ 個單位方格構成的桌子, 在某些單位方格的中心點有一隻螞蟻。從時間 $0$ 開始, 每隻螞蟻都沿著一個平行於方格邊的方向, 以速率 $1$ 前進。過程中若有螞蟻相遇:
(i) 如果是兩隻正面相遇, 則它們會一起順時針轉彎 $90^\circ$, 然後繼續以速率 $1$ 前進;
(ii) 如果是兩隻以垂直方向相遇, 或超過兩隻以上的螞蟻相遇, 則它們會繼續以原本的速度和方向前進。
當螞蟻爬到桌子邊緣, 它會從桌面摔落, 不再回來。當最後一隻螞蟻摔落桌面時, 我們說此時刻就是這群螞蟻的"末日"。
考慮所有可能的螞蟻起始位置, 試求末日發生的最晚可能時刻, 或是證明並不一定會有末日。
