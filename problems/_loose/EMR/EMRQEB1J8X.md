---
tag: EMRQEB1J8X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
某國有 $n$ 座城市, 任兩座城市間都有唯一的一條道路, 且都被規定只能單向行駛。一條從城市 $X$ 到城市 $Y$ 的路徑為一系列的單向道路, 使得一個人可以從 $X$ 經由這些道路移動到 $Y$, 且中間不會重複拜訪相同的城市。一組路徑被稱為獨立的, 若且唯若這其中的任兩條路徑都沒有使用相同的道路。

對於一個城市 $X$, 令 $n_X$ 為由 $X$ 向外的單向道路總數。對於兩個相異城市 $X$ 與 $Y$, 令 $N_{XY}$ 為在所有的獨立路徑組中, 從 $X$ 到 $Y$ 路徑數的最大可能值。證明: $N_{XY} = N_{YX}$ 若且唯若 $n_X = n_Y$。
