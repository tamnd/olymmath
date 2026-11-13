---
tag: TVV7X53E3R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $m > 1$ 為一正整數。有一隻老鼠要從 $3m \times 3m$ 西洋棋盤的最左下角格子 $a$ 跳到最右上角格子 $b$。老鼠每一次可以跑到牠所在位子右方一格或是上方一格。然而，棋盤上有一些格子放有黏鼠板，如果老鼠跑到黏鼠板上就會被黏住，無法再移動。
對於由棋盤上的格子所組成的集合 $X$，我們稱 $X$ 擋住老鼠，若且唯若當 $X$ 的格子都被放有黏鼠板時，老鼠無法從 $a$ 跳到 $b$。我們稱 $X$ 最小，若且唯若 $X$ 擋住老鼠、但移除 $X$ 的任何一格後都不能擋住老鼠。證明：
(i) 任何能擋住老鼠的最小集合的格數不大於 $3m^2$。
(ii) 證明存在格數不小於 $3m^2 - 3m$，且能擋住老鼠的最小集合。
