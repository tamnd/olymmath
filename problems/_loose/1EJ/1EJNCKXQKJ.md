---
tag: 1EJNCKXQKJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=46
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $T = \{1, 2, \dots, n\}$, 對於一個子集合 $S = \{s_1, s_2, \dots, s_k\} \subseteq T$ 其中 $s_1 > s_2 > \dots > s_k$, 定義
$$
f(S) = s_1 - s_2 + s_3 - s_4 + \dots;
$$
$$
g(S) = s_1 - s_3 + s_5 - s_7 + \dots,
$$
也就是 $g$ 是依序且循環地給 $1, 0, -1, 0$ 加權之和, 而 $f$ 是依序且循環地給 $1, -1$ 加權之和; 明顯地, $f(\emptyset) = g(\emptyset) = 0$.

a. 試求 $\sum_{S \subseteq T} f(S)$ 的公式, 也就是所有子集合 $S \subseteq T$ 之 $f(S)$ 的總和。

b. 試求 $\sum_{S \subseteq T} g(S)$ 的公式。

c. 如果你做不出 (b), 則同樣求 $\sum_{S \subseteq T} g(S)$, 但此時令 $T = \{1, 2, \dots, 8\}$。
