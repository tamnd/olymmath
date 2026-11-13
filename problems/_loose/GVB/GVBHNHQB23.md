---
tag: GVBHNHQB23
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=93
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $n$ 為一正奇數。平面上的整點集 $C = \{(i,j): i,j = 0,1,\dots,2n-1\}$ 構成一個 $2n \times 2n$ 的陣列，每個點上各有一隻天竺鼠，各自面向 $x$ 軸正向、$x$ 軸負向、$y$ 軸正向或 $y$ 軸負向中的其中一個方向。傑夫想要保留其中 $n^2+1$ 隻天竺鼠，並將其餘天竺鼠移除。
接著天竺鼠們作以下運動：在每一回合，被保留的每一隻天竺鼠同時往牠所面向的方向前進一單位長，並保持其面向；但如果一隻天竺鼠要前進的點 $(i,j) \notin C$，則牠改為前進到 $(p,q) \in C$，其中 $p \equiv i \pmod{2n}$ 而 $q \equiv j \pmod{2n}$ (舉例來說，如果一隻天竺鼠從 $(2,0)$ 爬向 $(2,-1)$，則牠改為爬到 $(2,2n-1)$。)
傑夫的目標是讓所有留下來的天竺鼠，在任何一回合都不會有兩隻天竺鼠有相同的終點，也不會有兩隻天竺鼠互相爬到對方該回合的起點。
試證：不論起始天竺鼠的面向如何分布，傑夫總是可以達成目標。
